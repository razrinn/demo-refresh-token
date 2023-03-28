import { useEffect } from 'react';
import {
  getDummy2DataCarina,
  getDummy3DataCarina,
  getDummy4DataCarina,
  getDummyDataCarina,
} from './api/request';

const Page4 = () => {
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        getDummyDataCarina();
        getDummy3DataCarina();
        await getDummy2DataCarina();
        getDummy4DataCarina();
      };

      fetchData();
    }, 3000);
  }, []);
  return <div>Page4 Component</div>;
};

export default Page4;
