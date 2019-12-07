<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "post",
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

<style scoped></style>
