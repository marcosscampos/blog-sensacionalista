<template>
  <div class="container bar__container"
       @submit.prevent="loader"
       ref="contentContainer">
    <v-card>
      <v-btn outlined block color="primary" dark>
        <router-link to="/">Voltar a Home</router-link>
      </v-btn>
      <section>
        <v-card-title>
          <h1> {{postBlog.title}} </h1>
        </v-card-title>
        <v-card-text>
          <p>
            {{postBlog.content}}
          </p>
        </v-card-text>
        <hr>
        <v-card-subtitle>
          <ul class="nav flex-column">
            <li class="nav-item">Data de postagem: {{postBlog.date | moment("DD/MM/YYYY")}}</li>
            <li class="nav-item">Site original: {{postBlog.source}}</li>
            <li class="nav-item"> Quantidade de comentários:
              <span class="badge badge-info">{{postBlog.comments}}</span>
            </li>
          </ul>
        </v-card-subtitle>
      </section>
    </v-card>
  </div>
</template>

<script>
import vue from 'vue';
import Loading from 'vue-loading-overlay';
import moment from 'vue-moment';
import { mapState } from 'vuex';

import * as Mutation from '../../store/modules/sensacionalista/mutationTypes';

vue.use(moment);

vue.use(Loading, {
  color: 'green',
  loader: 'spinner',
  width: 55,
  height: 55,
});

export default {
  computed: mapState({
    blogPost: (state) => state.blog.singlePost,
  }),
  beforeMount() {
    this.loading();
    this.$store.dispatch({ type: 'blog/buscarPost', index: this.$route.params.index });
  },
  data() {
    return {
      postBlog: {},
      loader: null,
    };
  },
  mounted() {
    const that = this;
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === `blog/${Mutation.BUSCAR_POST_INDIVIDUAL}`) {
        this.loader.hide();
        that.postBlog = state.blog.singlePost;
      }
    });
  },
  methods: {
    loading() {
      this.loader = this.$loading.show({
        container: this.$refs.contentContainer,
        canCancel: false,
        opacity: 0.2,
        backgroundColor: '#e0e0e0e0',
      });
    },
  },
};
</script>
<style scoped>
  * {
    padding-left: 0;
    padding-right: 0;
  }

  a {
    /*color: blue;*/
    font-size: 1.5rem !important;
    text-decoration: none !important;
    transition: 0.75s;
  }

  a:hover {
    transition: 0.75s;
    color: gray !important;
  }

  h1, h4 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.4rem;
  }

  #backhome {
    padding-top: 10px;
  }

  .content__footer {
    max-height: 100px;
  }

  ul,
  li {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .badge-info {
    width: 25px;
  }
</style>
