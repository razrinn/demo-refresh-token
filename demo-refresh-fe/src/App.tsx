import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  getDummy2DataExodus,
  getDummy2DataCarina,
  getDummyDataCarina,
  getDummyDataExodus,
} from './api/request';
import Page from './Page';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.localStorage.setItem('at', 'a');
    window.localStorage.setItem('rt', 'a1');
  }, []);

  useEffect(() => {
    function fetchData() {
      getDummyDataExodus();
      getDummy2DataExodus();
      getDummyDataCarina();
      getDummy2DataCarina();
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Page />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
