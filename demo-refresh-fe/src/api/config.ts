import axios from 'axios';

interface ICreateAxiosInstance {
  headers: any;
}

let isRefreshing = false;
let unauthorizedQueue: { source: string; resolve: any; reject: any }[] = [];
let refreshCount = 0;

const processQueue = (error: any, token: string | null = null) => {
  unauthorizedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  unauthorizedQueue = [];
};

function createAxiosInstance(BASE_URL: string, config?: ICreateAxiosInstance) {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: 'a',
    },
  });

  instance.interceptors.request.use(
    (req) => {
      req.headers.Authorization = window.localStorage.getItem('at');
      return req;
    },
    (err) => err
  );

  instance.interceptors.response.use(undefined, (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          unauthorizedQueue.push({
            resolve,
            reject,
            source: originalRequest.url,
          });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          refreshCount += 1;
          axios
            .post(
              `http://localhost:8000/refresh?source=${encodeURIComponent(
                originalRequest.url
              )}&count=${refreshCount}`,
              null,
              {
                headers: {
                  Authorization: window.localStorage.getItem('rt'),
                },
              }
            )
            .then(({ data }) => {
              // instance.defaults.headers['Authorization'] = data.token;
              window.localStorage.setItem('at', data.token);
              window.localStorage.setItem('rt', data.refreshToken);
              originalRequest.headers['Authorization'] = data.token;
              processQueue(null, data.token);
              resolve(axios(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        }, 5000);
      });
    }

    return Promise.reject(error);
  });

  return instance;
}

export default createAxiosInstance;
