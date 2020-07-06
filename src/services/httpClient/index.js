import axios from 'axios'

const httpClient = axios.create()

httpClient.interceptors.request.use(config => {
    return config
})

httpClient.interceptors.response.use(response => {
    return response
})

export default httpClient;