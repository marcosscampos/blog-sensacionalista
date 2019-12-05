<template>
  <div>
    <article v-for="post of posts" :key="post">
      {{ posts.content }}
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "posts",
  data: function() {
    return {
      baseUrl:
        "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/noticias.json",
      posts: [],
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

<style></style>
