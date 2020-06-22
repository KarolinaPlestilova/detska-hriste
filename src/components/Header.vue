<template>
  <!-- Zde je hlavní komponenta HEADER + logo - stejná na všech stránkách -->
  <div class="header">
    <img
      class="logo"
      src="assets/img/Logo-projekt_03.png"
      alt="Logo s dětmi ven"
    />
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
* {
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
.logo {
  width: 50%;
  padding: 15px;
}

.menu {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #0da5ce;
  border-radius: 7px;
  display: flex;
  list-style-type: none;
}

ul {
  width: 350px;
}
li {
  width: 50%;
}
.menu li.active {
  background-color: #ff790b;
  border-radius: 7px 0px 0px 7px;
}

.menu a {
  display: flex;
  color: white;
  text-decoration: none;
  padding: 20px 30px;
  font-weight: 500;
  justify-content: center;
}
.menu a:hover {
  background-color: #ffce00;
  border-radius: 7px;
}

.homepage-obrazek {
  width: 100%;
  height: 250px;
}
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0 40px 0;
  background-color: #c73d8a;
}

.obrazek-mapa {
  position: absolute;
  right: 60px;
  bottom: 80px;
  width: 10%;
  max-width: 100%;
  height: auto;
}
</style>
