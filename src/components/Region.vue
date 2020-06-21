<template>
  <div>
    <!-- <h1>Region detail</h1> -->
    <h2>{{ countyName }}</h2>
    <p>{{ countyDescription }}</p>
    <ul>
      <router-link
        v-for="(place, index) in places"
        tag="li"
        :to="{name: 'detail', params: {id: id, detailId: place.id, description: place.description, address: place.address}}"
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
      countyName: "",
      countyDescription: "",
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

        this.countyDescription = data[this.$route.params.id].description;
        this.places = updatedPlaces;
        this.countyName = data[this.$route.params.id].name;
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
