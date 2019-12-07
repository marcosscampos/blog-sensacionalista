<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a
        href="https://www.linkedin.com/in/marcos-vinicius-839baa102/"
        target="_blank"
        rel="noopener noreferrer"
        class="navbar-brand"
      >
        <img
          src="../assets/logo.png"
          id="photo"
          alt="Marcos Vinicius's LinkedIn"
        />
      </a>
      <h1 class="navbar-brand">
        Blog Sensacionalista <span class="badge badge-info">Em Vue.js</span>
      </h1>
    </nav>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

export default {
  name: "Content"
};
</script>

<style scoped>
.navbar-brand {
  font-size: 1.7rem;
}

#photo {
  width: 30px;
  height: 30px;
}
h1 {
  padding-top: 10px;
}

nav {
  background-color: rgb(197, 253, 208) !important;
}
</style>
