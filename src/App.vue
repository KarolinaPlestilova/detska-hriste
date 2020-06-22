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
  font-family: "Rubik", sans-serif;
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
</style>
