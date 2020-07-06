<template>
  <div class="container container__bar">
  <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "./components/Footer/footer.vue";
  import Header from "./components/Header/Header.vue";
  import loadingComponent from "./components/loadingComponent/loading";

export default {
    components: {
      Header,
      Footer
    },
  mounted() {
    loadingComponent.loading()
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
