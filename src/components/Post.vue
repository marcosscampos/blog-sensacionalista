<template>
  <div>
    <div class="list-group" v-for="blog in blogs" v-bind:key="blog.id">
      <div class="list-group-item">
        <h4 class="navbar-brand">{{ blog.title }}</h4>
        <p class="text-justify">
          <Posts />
          {{ blog.content.slice(0, 350) + "..." }}
          <router-link :to="'/post/' + blog.id"> Ler mais </router-link>
        </p>
        <hr />
        <span>
          Data de criação:
          {{ blog.date | moment("ddd - DD/MM/YYYY") }}
        </span>
        <br />
        <span> Site original: {{ blog.source }} </span> <br />
        <span>
          Quantidade de comentários:
          <span class="badge badge-info">
            {{ blog.comments }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Posts from "../components/Posts/Posts";

export default {
  components: {
    Posts
  },
  name: "posts",
  data: function() {
    return {
      baseUrl:
        "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json",
      blogs: [],
      error: ""
    };
  },
  async created() {
    try {
      const res = await axios.get(this.baseUrl);
      this.blogs = res.data;
    } catch (e) {
      this.error = e.message;
    }
  }
};
</script>

<style scoped>
.list-group {
  margin: 10px !important;
  border-radius: 10px !important;
}

a {
  text-decoration: none;
  color: green;
}
</style>
