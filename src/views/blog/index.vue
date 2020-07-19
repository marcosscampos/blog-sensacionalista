<template>
  <div class="bar__container"
       @submit.prevent="loader"
       ref="contentContainer">
    <v-card v-for="(item, index) in posts" :key="index">
      <section>
        <v-card-title>
          <h1>{{item.title}}</h1>
        </v-card-title>
        <v-card-text>
          <p>
            {{item.content.slice(0, 350) + "..."}}
            <router-link :to='`/post/${index}`'>
              Ler Mais
            </router-link>
          </p>
        </v-card-text>
        <hr>
        <v-card-subtitle>
          <ul class="nav flex-column">
            <li class="nav-item">Data de Postagem: {{item.date | moment("ddd - DD/MM/YYYY")}}</li>
            <li class="nav-item">Site original: {{item.source}}</li>
            <li class="nav-item">Quantidade de comentários:
              <span class="badge badge-info">{{item.comments}}</span>
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
import { mapState } from 'vuex';

import loadingComponent from '../../components/loadingComponent/loading';
import * as Mutation from '../../store/modules/sensacionalista/mutationTypes';

import 'vue-loading-overlay/dist/vue-loading.css';

vue.use(Loading, {
  color: 'green',
  loader: 'spinner',
  width: 55,
  height: 55,
});

export default {
  computed: mapState({
    blogPosts: (state) => state.blog.posts,
  }),
  data() {
    return {
      posts: [],
      loader: null,
    };
  },
  beforeMount() {
    this.loading();
    this.$store.dispatch('blog/obterPosts');
  },
  exibirPost(id) {
    this.$router.push({ name: 'post', params: { id } });
  },
  mounted() {
    loadingComponent.loading();
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === `blog/${Mutation.LISTAR_POSTS}`) {
        this.loader.hide();
        if (this.blogPosts.data.map != null) {
          this.posts = this.blogPosts.data.map((i) => ({
            title: i.title,
            content: i.content,
            date: i.date,
            source: i.source,
            comments: i.comments,
          }));
        }
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

<style>
  h1,
  h4 {
    font-size: 1.7rem !important;
  }

  section {
    margin: 10px !important;
    border-radius: 10px !important;
  }

  a {
    text-decoration: none !important;
    color: royalblue;
    transition: 0.75s;
  }

  a:hover {
    color: gray;
    transition: 0.75s;
  }

  p {
    font-size: 1.3rem;
    line-height: normal;
    text-align: justify;
    margin-bottom: 0;
  }

  ul,
  li {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
</style>
