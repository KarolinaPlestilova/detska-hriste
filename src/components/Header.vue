<template>
  <div>
    <img class="logo" src="assets/Logo-projekt_01.png" alt="Logo s dětmi ven" />
    <ul class="menu">
      <router-link class="menu-router" tag="li" to="/">
        <a>Domů</a>
      </router-link>
      <router-link class="menu-router" tag="li" to="/o-projektu">
        <a>O projektu</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 50%;
}

.menu {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #0da5ce;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.menu li {
  display: inline-block;
}
.menu a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 20px 30px;
}
.menu a:hover {
  background-color: #c73d8a;
}

.homepage-obrazek {
  width: 100%;
  height: 250px;
}
</style>
