<template>
  <!-- Komponenta, která vypisuje detail hriště - aktivity -->
  <div>
    <div>
      <p>{{ address }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  props: ["address", "description"],
};
</script>

<style scoped>
* {
  font-family: "Lora", serif;
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
</style>
