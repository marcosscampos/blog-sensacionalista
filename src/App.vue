<template>
  <div class="container">
    <Header/>
    <div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/footer.vue';
import Header from './components/Header/Header.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
  html,
  body {
    box-sizing: border-box;
    background-color: #E4EDF8 !important;
  }

  html {
    font-family: 'Calibri', sans-serif;
    font-size: 10px;
  }

  body {
    font-size: 1.6em;
  }
</style>
