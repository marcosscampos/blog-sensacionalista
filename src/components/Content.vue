<template>
  <div class="container">
    <div class="list-group">
      <p class="navbar-brand navbar-expand-lg" id="postquantity">
        Quantidade de posts:
        <span class="badge badge-info">{{ blogs.length }}</span>
      </p>
      <div class="list-group-item" v-for="blog in blogs" v-bind:key="blog">
        <h4 class="navbar-brand">{{ blog.title }}</h4>
        <p>
          {{ blog.content }}
        </p>
        <hr />
        <span> Data de criação: {{ blog.date }} </span> <br />
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
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios";

export default {
  name: "Content",
  data: function() {
    return {
      blogs: []
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json"
      );
      this.blogs = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#photo {
  width: 30px;
  height: 30px;
}

#postquantity {
  padding-top: 15px;
  margin: 0;
}

h1 {
  padding-top: 10px;
}
</style>
