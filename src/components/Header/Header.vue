<template>
  <v-container class="text-center">
    <v-toolbar class="rounded-lg">
      <a href="https://www.linkedin.com/in/marcos-vinicius-839baa102/"
         target="_blank"
         rel="noopener noreferrer"
         class="">
        <img src="../../assets/logo.png"
             id="photo"
             alt="Marcos Vinicius's LinkedIn"/>
      </a>
      <h1>
        Blog Sensacionalista
      </h1>
    </v-toolbar>
  </v-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

export default {};
</script>

<style scoped>
  * {
    padding: 0 !important;
  }

  #photo {
    width: 30px;
    height: 30px;
  }

  h1 {
    padding-top: 10px;
  }

  a {
    margin-right: 10px;
  }
</style>
