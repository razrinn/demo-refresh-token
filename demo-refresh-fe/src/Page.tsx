import { useEffect } from 'react';
import {
  getDummy3DataCarina,
  getDummy3DataExodus,
  getDummy4DataCarina,
  getDummy4DataExodus,
} from './api/request';

const Page = () => {
  useEffect(() => {
    getDummy3DataCarina();
    getDummy4DataCarina();
    getDummy3DataExodus();
    getDummy4DataExodus();
  }, []);
  return <div>Page Component</div>;
};

export default Page;
