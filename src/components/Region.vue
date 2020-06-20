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
import { countiesList } from "../list";

export default {
  data() {
    return {
      name: "",
      description: "",
      places: []
    };
  },
  created() {
    countiesList.forEach((item, index) => {
      const key = Object.keys(countiesList[index]);

      if (key[0] === this.$route.params.id) {
        this.name = item[this.$route.params.id].name;
        this.description = item[this.$route.params.id].description;
        this.places = item[this.$route.params.id].places;
      }
    });
  }
};
</script>

<style scoped></style>
