<template>
  <div>
    <!-- <h1>Region detail</h1> -->
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <ul>
      <router-link
        tag="li"
        :to="{name: 'detail', params: {id: id, detailId: place.id }}"
        v-for="(place, index) in places"
        v-bind:key="index"
      >
        <a>{{ place.address }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      places: [],
      id: this.$route.params.id
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://detska-hriste.firebaseio.com/countiesList.json"
        );
        const data = await response.json();
        const updatedPlaces = [];

        data[this.$route.params.id].places.forEach((place, index) => {
          place.id = index;
          updatedPlaces.push(place);
        });

        this.name = data[this.$route.params.id].name;
        this.description = data[this.$route.params.id].description;
        this.places = updatedPlaces;
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
