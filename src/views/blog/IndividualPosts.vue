<template>
    <div class="container bar__container"
         @submit.prevent="loader"
         ref="contentContainer">
        <router-link to="/" class="btn btn-link text-center" id="backhome">Voltar a Home</router-link>
        <section class="list-group-item text-justify content__section">
            <h1> {{blogPost.title}} </h1>
            <p>
                {{blogPost.content}}
            </p>
            <hr>
        <div class="content__footer">
            <span>Data de postagem: {{blogPost.date | moment("ddd - DD/MM/YYYY")}}</span>
            <span>Site original: {{blogPost.source}}</span>
            <span>Quantidade de comentários:</span>
            <span class="badge badge-info">{{blogPost.comments}}</span>
        </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import * as Mutation from '../../store/modules/sensacionalista/mutationTypes'
    import vue from "vue";
    import Loading from "vue-loading-overlay";

    vue.use(Loading, {
        color: 'green',
        loader: 'spinner',
        width: 55,
        height: 55
    })

    export default {
        computed: mapState({
            blogPost: state => state.blog.post
        }),
        beforeMount() {
            // this.loading()
            this.$store.dispatch({type: "blog/buscarPost", index: this.$route.params.id})
        },
        data() {
            return {
                id: this.$route.params.id,
                postBlog: {},
                loader: null
            }
        },
        mounted() {
            // eslint-disable-next-line no-unused-vars
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'blog/' + Mutation.BUSCAR_POST_INDIVIDUAL) {
                    // this.loader.hide()
                  return null;
                }
            })
        },
        methods: {
            loading() {
                this.loader = this.$loading.show({
                    container: this.$refs.contentContainer,
                    canCancel: false,
                    opacity: 0.2,
                    backgroundColor: '#e0e0e0e0',
                })
            }
        }
    };
</script>
<style scoped>
    a {
        color: green;
        font-size: 1.5rem !important;
        text-decoration: none !important;
    }

    h1, h4 {
        font-size: 1.7rem;
    }

    p {
        font-size: 1.4rem;
    }

    #backhome {
        padding-top: 10px;
        padding-bottom: 0;
    }

    .content__section {
        height: 500px;
        width: 500px;
    }

    .content__footer {
        max-height: 100px;
    }
</style>
