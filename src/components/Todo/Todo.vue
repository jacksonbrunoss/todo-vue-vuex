<template>
  <section class="box-todo">
    <p v-for="task in todos" :key="task.id"></p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Todo",
  computed: {
    ...mapState(["todos"])
  }
};
</script>

<style scoped></style>
