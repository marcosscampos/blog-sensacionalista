import httpClient from "../httpClient";

const urlApi = process.env.VUE_APP_ROOT_API

const _listarPosts = {
    data: []
}

let blogSensacionalistaService = {
    async obterPosts(callback) {
        httpClient.get(urlApi).then((response) => {
            _listarPosts.data = response.data;
            callback(_listarPosts)
        }).catch(() => {})
    },

    async buscarPost(index) {
        return new Promise((callback) => {
            httpClient.get(urlApi + `/${[index]}`).then((response) => {
                let resposta = response.data.filter(conteudo => ({
                    title: conteudo.title,
                    content: conteudo.content,
                    source: conteudo.source,
                    date: conteudo.date,
                    comments: conteudo.comments
                }))

                callback(resposta)
            }).catch(() => {})
        })
    }
}

export default blogSensacionalistaService;