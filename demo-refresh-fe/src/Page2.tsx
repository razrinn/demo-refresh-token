import { useEffect } from 'react';
import { getBoxingData, getBoxingData2, getBoxingData3 } from './api/request';

const Page2 = () => {
  useEffect(() => {
    getBoxingData();
    getBoxingData2();
    getBoxingData3();
  }, []);
  return <div>Page2 Component</div>;
};

export default Page2;
