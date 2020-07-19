<template>
    <v-footer>
        <p>
            Copyright&reg; - {{date}}
        </p>
    </v-footer>
</template>

<script>

export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
</style>
