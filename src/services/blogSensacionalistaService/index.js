import httpClient from "../httpClient";

const urlApi = 'https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json'

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

    async buscarPost(id) {
        return new Promise((callback) => {
            httpClient.get(urlApi + `/${id}`).then((response) => {
                // let resposta = response.data.filter(conteudo => ({
                //     title: conteudo.title,
                //     content: conteudo.content,
                //     source: conteudo.source,
                //     date: conteudo.date,
                //     comments: conteudo.comments
                // }))

                callback(response.data)
            }).catch(() => {})
        })
    }
}

export default blogSensacionalistaService;