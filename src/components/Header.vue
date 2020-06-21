<template>
  <div>
    <img class="logo" src="assets/Logo-projekt_01.png" alt="Logo s dětmi ven" />
    <ul class="menu">
      <router-link tag="li" to="/" active-class="active" exact>
        <a>Domů</a>
      </router-link>
      <router-link tag="li" to="/o-projektu" active-class="active" exact>
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
}
.menu li.active {
  background-color: yellow;
}
.menu li {
  display: inline-block;
}
.menu a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 20px 30px;
  font-weight: 500;
}
.menu a:hover {
  background-color: #c73d8a;
}

.homepage-obrazek {
  width: 100%;
  height: 250px;
}
</style>
