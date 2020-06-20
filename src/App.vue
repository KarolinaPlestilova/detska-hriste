<template>
  <div class="container">
    <Header />

    <h1>Vue router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    Header,
    Map,
  },
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>
