<template>
  <div class="container">
    <div class="list-group">
      <p class="text-secondary" id="postquantity">
        Quantidade de posts:
        <span class="badge badge-info">{{ blogs.length }}</span>
      </p>
      <p class="error" v-if="error">{{ error }}</p>
      <Post />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Post from "./Post";
import axios from "axios";

export default {
  components: {
    Post
  },
  name: "Content",
  props: ["posts"],
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
#photo {
  width: 30px;
  height: 30px;
}

#postquantity {
  padding-top: 15px;
  padding-left: 12px;
  margin: 0;
}

h1 {
  padding-top: 10px;
}
</style>
