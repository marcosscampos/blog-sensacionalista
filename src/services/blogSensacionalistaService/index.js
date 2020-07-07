import httpClient from '../httpClient';

const urlApi = process.env.VUE_APP_ROOT_API;

const listarPosts = {
  data: [],
};

const blogSensacionalistaService = {
  async obterPosts(callback) {
    httpClient.get(urlApi).then((response) => {
      listarPosts.data = response.data;
      callback(listarPosts);
    }).catch(() => {});
  },

  async buscarPost(index) {
    return new Promise((callback) => {
      httpClient.get(`${urlApi}/${index} `).then((response) => {
        callback(response.data);
      }).catch(() => {});
    });
  },
};

export default blogSensacionalistaService;
