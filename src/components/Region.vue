<template>
  <!-- <h1>Region detail - zde jsou vypsané všechny aktivity-hřiště z databáze dle názvu regionu (kraje)</h1> -->
  <div>
    <div>
      <h2>{{ countyName }}</h2>
      <p>{{ countyDescription }}</p>
    </div>

    <b-card bg-variant="light" text-variant="blue" title="Card Title">
      <b-card-text>With supporting text below as a natural lead-in to additional content.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <router-link
      v-for="(place, index) in places"
      :to="{name: 'detail', params: {id: id, detailId: place.id, description: place.description, address: place.address}}"
      v-bind:key="index"
    >
      <b-card bg-variant="light" text-variant="blue" :title="place.activity">
        <b-card-text>{{ place.address }}</b-card-text>
        <b-button variant="primary">KLIKNI</b-button>
      </b-card>
    </router-link>

    <!-- Můj router link, který je ale proklikávací celý -->

    <!-- <router-link
      v-for="(place, index) in places"
      :to="{name: 'detail', params: {id: id, detailId: place.id, description: place.description, address: place.address}}"
      v-bind:key="index"
    >
      <b-card bg-variant="light" text-variant="blue" :title="place.activity">
        <b-card-text>{{ place.address }}</b-card-text>
        <b-button variant="primary">KLIKNI</b-button>
      </b-card>
    </router-link>-->

    <!-- Původní router link z hackathon -->

    <!-- <ul>
      <router-link
        v-for="(place, index) in places"
        tag="li"
        :to="{name: 'detail', params: {id: id, detailId: place.id, description: place.description, address: place.address}}"
        v-bind:key="index"
      >
        <a>{{ place.address }}</a>
      </router-link>
    </ul>-->
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
