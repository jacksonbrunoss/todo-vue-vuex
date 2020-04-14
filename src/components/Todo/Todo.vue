<template>
  <section class="box-todo">
    <div class="tile">
      <div class="tile-content">
        <div class="tile-title">
          <p>{{ task.title }}</p>
        </div>
      </div>
      <div class="tile-action">
        <button class="btn btn-error" @click="$emit('remove', task)">
          Remover
        </button>
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
  padding: 16px 0px;
  font-size: 1.2rem;
}
</style>
