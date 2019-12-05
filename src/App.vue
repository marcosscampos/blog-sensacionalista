<template>
  <div class="container">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Content,
    Footer,
    Header
  }
};
</script>

<style></style>
