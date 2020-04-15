<template>
  <section class="box-todo">
    <div class="tile">
      <div class="tile-content">
        <div class="tile-title">
          <p :class="{completed: task.completed}">{{ task.title }}</p>
        </div>
        <p>
          <button class="btn btn-primary" @click="$emit('completed', task)">
            <i v-if="task.completed === true" class="bx bx-checkbox"></i>
            <i v-else class="bx bxs-checkbox-checked"></i>
          </button>
          <button class="btn btn-error" @click="$emit('remove', task)">
            <i class="bx bx-x"></i>
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Todo",
  props: {
    task: { type: Object, required: true }
  }
};
</script>

<style scoped>
.tile-title p {
  display: block;
  padding: 0px 0px;
  font-size: 1rem;
}
.completed {
  text-decoration: line-through;
  color: lightgrey;
}
.btn {
  margin-right: 16px;
}
</style>
