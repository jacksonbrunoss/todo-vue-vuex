<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style>
@import url("https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css");
</style>
