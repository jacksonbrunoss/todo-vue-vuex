<template>
  <section class="wrapper-todo">
    <div class="container grid-lg">
      <Todo />
    </div>
  </section>
</template>

<script>
import Todo from "@/components/Todo/Todo";
export default {
  name: "WrapperTodo",
  components: { Todo }
};
</script>

<style scoped>
.wrapper-todo {
  width: 100%;
  padding: 24px 16px;
}
</style>
