import blogSensacionalistaService from '../../../services/blogSensacionalistaService'
import * as Mutation from './mutationTypes'

const state = {
    posts: [],
    post: {},
    erro: {}
}

const getters = {}

const actions = {
    async obterPosts({commit}) {
        blogSensacionalistaService.obterPosts(posts => {
            commit(Mutation.LISTAR_POSTS, posts)
        })
    },

    async buscarPost({commit}, payload) {
        await blogSensacionalistaService.buscarPost(payload.id).then(post => {
            commit(Mutation.BUSCAR_POST_INDIVIDUAL, post)
        }, (reason) => {
            commit(Mutation.BUSCAR_POST_INDIVIDUAL, reason)
        })
    }
}


const mutations = {
    [Mutation.LISTAR_POSTS](state, posts) {
        state.posts = posts
    },

    [Mutation.BUSCAR_POST_INDIVIDUAL](state, post) {
        state.post = post
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}