<template>
  <div class="container">
  <Header/>
    <span v-if="loading">Loading...</span>
    <span v-if="error">{{ error }}</span>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "./components/footer.vue";
  import Header from "./components/Header.vue";

export default {
    components: {
      Header,
      Footer
    },
  name: "app",
  data () {
      return {
        loading: false,
        error: null
      }
  }
};
</script>

<style>
html,
body {
  box-sizing: border-box;
  background-color: rgb(232, 252, 237) !important;
}

html {
  font-size: 10px;
}
body {
  font-size: 1.6em;
}
</style>
