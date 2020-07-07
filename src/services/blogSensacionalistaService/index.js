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
    const response = await httpClient.get(urlApi);
    const posts = response.data;
    return new Promise((callback) => {
      const individualPost = posts[index];
      return callback(individualPost);
    });
  },
};

export default blogSensacionalistaService;
