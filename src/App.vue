<template>
  <div class="container">
    <Header />

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  line-height: 1.5;
}

body {
  margin: 0;
}
</style>
