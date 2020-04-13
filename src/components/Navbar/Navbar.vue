<template>
  <nav class="navigation">
    <div class="container grid-lg">
      <div class="navbar">
        <div class="navbar-section">
          <router-link class="navbar-brand" to="/">BRAND</router-link>
        </div>

        <div class="navbar-section">
          <div class="menu-todo">
            <ul>
              <li><router-link tag="a" to="/about">Sobre</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navigation {
  width: 100%;
  padding: 18px 16px;
}
.menu-todo ul {
  display: flex;
  padding: 0;
  margin: 0;
}
.menu-todo ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-todo ul li a {
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}
</style>
