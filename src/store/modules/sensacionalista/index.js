import blogSensacionalistaService from '../../../services/blogSensacionalistaService';
import * as Mutation from './mutationTypes';

const state = {
  posts: [],
  singlePost: {},
  erro: {},
};

const getters = {};

const actions = {
  async obterPosts({ commit }) {
    await blogSensacionalistaService.obterPosts((posts) => {
      commit(Mutation.LISTAR_POSTS, posts);
    });
  },

  async buscarPost({ commit }, payload) {
    await blogSensacionalistaService.buscarPost(payload.index).then((singlePost) => {
      commit(Mutation.BUSCAR_POST_INDIVIDUAL, singlePost);
    }, (reason) => {
      commit(Mutation.BUSCAR_POST_INDIVIDUAL, reason);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [Mutation.LISTAR_POSTS](state, posts) {
    // eslint-disable-next-line no-param-reassign
    state.posts = posts;
  },

  // eslint-disable-next-line no-shadow
  [Mutation.BUSCAR_POST_INDIVIDUAL](state, singlePost) {
    // eslint-disable-next-line no-param-reassign
    state.singlePost = singlePost;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
