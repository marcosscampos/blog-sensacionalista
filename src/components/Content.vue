<template>
  <div class="container">
    <div class="list-group">
      <p class="text-secondary" id="postquantity">
        Quantidade de posts:
        <span class="badge badge-info">{{ posts.length }}</span>
      </p>
      <Post />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Post from "./Post";
import { mapState } from "vuex";

export default {
  components: {
    Post
  },
  name: "Content",
  data: function() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.$store.dispatch("CarregaPost");
  },
  computed: {
    ...mapState(["posts"])
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
  font-size: 1.7rem;
}

h1 {
  padding-top: 10px;
}
</style>
