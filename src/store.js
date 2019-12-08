import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios);

const BaseUrl = "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json";

export default new vuex.Store({
  state: {
    posts: []
  },
  actions: {
    async CarregaPost({ commit }) {
      await axios.get(BaseUrl)
        .then(data => {
          let posts = data.data;
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    }
    },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  }
})

