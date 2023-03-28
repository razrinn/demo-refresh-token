import createAxiosInstance from './config';

export const ExodusRequest = createAxiosInstance('http://localhost:8000');
export const CarinaRequest = createAxiosInstance('http://localhost:8000');
export const SekuritasRequest = createAxiosInstance('http://localhost:8000');

export const getDummyDataExodus = () => ExodusRequest.get('/dummy?type=exodus1');
export const getDummy2DataExodus = () => ExodusRequest.get('/dummy?type=exodus2');
export const getDummy3DataExodus = () => ExodusRequest.get('/dummy?type=exodus3');
export const getDummy4DataExodus = () => ExodusRequest.get('/dummy?type=exodus4');
export const getDummyDataCarina = () => CarinaRequest.get('/dummy?type=carina1');
export const getDummy2DataCarina = () => CarinaRequest.get('/dummy?type=carina2');
export const getDummy3DataCarina = () => CarinaRequest.get('/dummy?type=carina3');
export const getDummy4DataCarina = () => CarinaRequest.get('/dummy?type=carina4');
export const getBoxingData = () => SekuritasRequest.get('/boxing?type=1')
export const getBoxingData2 = () => SekuritasRequest.get('/boxing?type=2')
export const getBoxingData3 = () => SekuritasRequest.get('/boxing?type=3')
export const getBoxingDataExodus = () => ExodusRequest.get('/boxing?type=exodus1')
export const getBoxingData2Exodus = () => ExodusRequest.get('/boxing?type=exodus2')
export const getBoxingData3Exodus = () => ExodusRequest.get('/boxing?type=exodus3')

