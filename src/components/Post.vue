<template>
  <div>
    <div v-for="(item, index) in posts" v-bind:key="index.id">
      <section class="list-group-item">
        <h1>{{item.title}}</h1>
        <p>
          {{item.content.slice(0, 350) + "..."}}
        <router-link :to="`/posts/${index}/`">
         Ler Mais
        </router-link>
          <br>
          <em>Esse link foi clicado {{count}} vezes</em>
        </p>
        <hr>
      <ul class="nav flex-column">
        <li class="nav-item">Data de Postagem: {{item.date | moment("ddd - DD/MM/YYYY")}}</li>
        <li class="nav-item">Site original: {{item.source}} </li>
        <li class="nav-item">Quantidade de comentários:
         <span class="badge badge-info">
           {{item.comments}}
         </span>
        </li>
      </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "posts",
  data: () => {
    return { count: 0 }
  },
  mounted() {
    this.$store.dispatch("CarregaPost");
  },
  computed: {
    ...mapState(["posts"])
  },
};
</script>

<style>
h1,
h4 {
  font-size: 1.7rem !important;
}

.list-group-item {
  margin: 10px !important;
  border-radius: 10px !important;
}
a {
  text-decoration: none !important;
  color: green;
}

p {
  font-size: 1.4rem;
}

ul,
li {
  font-size: 1.4rem;
}
</style>
