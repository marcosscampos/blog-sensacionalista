import axios from 'axios';

const httpClient = axios.create();

httpClient.interceptors.request.use((config) => config);

httpClient.interceptors.response.use((response) => response);

export default httpClient;
