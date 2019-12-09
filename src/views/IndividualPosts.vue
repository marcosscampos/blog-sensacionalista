<template>
  <div class="container">
    <router-link to="/" class="btn btn-link text-center" id="backhome">Voltar a Home</router-link>
    <article  class="list-group-item text-justify">
      <div v-for="(blog, index) in Obj" v-bind:key="index.id">
      <h1> {{blog.title}} </h1>
      <p>
      {{blog.content}}
      </p>
        <hr>
    <footer>
      <span>Data de postagem: {{blog.date | moment("ddd - DD/MM/YYYY")}}</span>
      <br>
      <span>Site original: {{blog.source}}</span>
      <br>
      <span>Quantidade de comentários:
        <span class="badge badge-info">{{blog.comments}}</span>
      </span>
    </footer>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "individualpost",
  data: function() {
    return {
      baseUrl: "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json" ,
      blogs: [],
      limit: 1
    };
  },
  async created() {
    try {
      const res = await axios.get(this.baseUrl);
      this.blogs = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    Obj(){
      return this.limit ? this.blogs.slice(0, this.limit) : this.blogs
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
  p{
    font-size: 1.4rem;
  }

  #backhome{
    padding-top: 10px;
    padding-bottom: 0;
  }
</style>
