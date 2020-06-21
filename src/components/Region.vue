<template>
  <div>
    <!-- <h1>Region detail</h1> -->
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <ul>
      <li v-for="(place, index) in places" v-bind:key="index">{{ place.address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      places: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://detska-hriste.firebaseio.com/countiesList.json"
        );
        const data = await response.json();
        this.name = data[this.$route.params.id].name;
        this.description = data[this.$route.params.id].description;
        this.places = data[this.$route.params.id].places;
      } catch (error) {
        alert(error);
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
