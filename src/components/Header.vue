<template>
  <div>
    <ul class="menu">
      <router-link tag="li" to="/"><a>Domů</a></router-link>
      <li>
        <a href="#oprojektu">O projektu</a>
      </li>
      <li>
        <a href="#mapahrist">Mapa hřišť a venkovních aktivit</a>
      </li>
      <li>
        <a href="#formulářnapřidáníhřiště">Přidat hřiště</a>
      </li>
      <li>
        <a href="#fotogalerie">Fotogalerie</a>
      </li>
      <li>
        <a href="#kontakt">Kontakt</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.menu {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #282425;
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
  background-color: #4db857;
}
</style>
