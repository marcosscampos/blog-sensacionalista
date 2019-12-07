<template>
  <div>
    <div v-for="item in posts" :key="item.title">
      <section class="list-group-item">
        <h1>{{ item.title }}</h1>
        <p>
          {{ item.content.slice(0, 350) + "..." }}
          <router-link :to="'/posts/' + item.title[item]">Ler Mais</router-link>
        </p>
        <hr />
        <div class="nav flex-column">
          <li class="nav-item">
            Data de postagem: {{ item.date | moment("ddd - DD/MM/YYYY") }}
          </li>
          <li class="nav-item">Site original: {{ item.source }}</li>
          <li class="nav-item">
            Quantidade de comentários:
            <span class="badge badge-info">{{ item.comments }}</span>
          </li>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "posts",
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
h1,
h4 {
  font-size: 1.7rem !important;
}

.list-group-item {
  margin: 10px !important;
  border-radius: 10px !important;
}
a {
  text-decoration: none;
  color: green;
}
</style>
