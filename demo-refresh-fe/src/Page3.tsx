import { useEffect } from 'react';
import {
  getBoxingData2Exodus,
  getBoxingData3Exodus,
  getBoxingDataExodus,
} from './api/request';

const Page3 = () => {
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        getBoxingDataExodus();
        await getBoxingData2Exodus();
        getBoxingData3Exodus();
      };

      fetchData();
    }, 2000);
  }, []);
  return <div>Page3 Component</div>;
};

export default Page3;
