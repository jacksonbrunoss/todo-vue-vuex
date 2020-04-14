<template>
  <div class="home">
    <TextfieldTodo />
    <WrapperTodo />
  </div>
</template>

<script>
import TextfieldTodo from "@/components/Todo/TextfieldTodo";
import WrapperTodo from "@/components/Todo/WrapperTodo";
export default {
  name: "Home",
  components: {
    TextfieldTodo,
    WrapperTodo
  }
};
</script>
