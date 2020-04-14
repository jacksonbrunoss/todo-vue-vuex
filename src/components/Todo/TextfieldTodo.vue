<template>
  <section class="textfield-todo">
    <div class="container grid-lg">
      <form @submit.prevent="add(task)">
        <div class="input-group">
          <input
            class="form-input"
            type="text"
            placeholder="add task"
            v-model="task.title"
          />
          <button class="btn btn-primary input-group-btn">
            <i class="bx bx-check"></i>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TextFieldTodo",
  data() {
    return {
      task: { completed: false }
      //   todos: [{ id: 0, title: "Minha Tarefa", completed: false }]
    };
  },
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions(["addTodo"]),
    add(task) {
      this.addTodo(task);
      this.task = { computed: false };
      console.log(this.todos);
    }
  }
};
</script>

<style scoped>
.textfield-todo {
  width: 100%;
  padding: 40px 16px;
}
</style>
