<template>
  <!-- Komponenta, která vypisuje detail hriště - aktivity -->
  <div>
    <p>{{ address }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  methods: {},
  props: ["address", "description"]
};
</script>

<style scoped>
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
</style>
