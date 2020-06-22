<template>
  <div class="homepage">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="css">
* {
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
.welcome-page {
  background-color: #f0f0f0;
}
</style>
