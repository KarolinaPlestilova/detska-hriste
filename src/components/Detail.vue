<template>
  <!-- Komponenta, která vypisuje detail hriště - aktivity -->
  <div class="detail-hriste">
    <p>{{ address }}</p>
    <p>{{ description }}</p>
    <img
      class="detail-hriste"
      src="assets/img/hriste-foto.jpg"
      alt="Fotografie hriště"
    />
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

.detail-hriste {
  width: 80%;
}
</style>
