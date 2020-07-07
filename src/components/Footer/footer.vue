<template>
    <div class="content__footer">
        <p>
            Copyright&reg; - {{date}}
        </p>
    </div>
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
    .content__footer {
        text-align: center;
    }
</style>
