<template>
  <section class="wrapper-todo">
    <div class="container grid-lg">
      <Todo
        :task="task"
        v-for="task in todos"
        :key="task.id"
        @remove="removeTodo(task)"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Todo from "@/components/Todo/Todo";
export default {
  name: "WrapperTodo",
  components: { Todo },
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions(["removeTodo"])
  }
};
</script>

<style scoped>
.wrapper-todo {
  width: 100%;
  padding: 24px 16px;
}
</style>
