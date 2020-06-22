<template>
  <!-- <h1>Region detail - zde jsou vypsané všechny aktivity-hřiště z databáze dle názvu regionu (kraje)</h1> -->
  <div>
    <div>
      <h2>{{ countyName }}</h2>
      <p>{{ countyDescription }}</p>
    </div>

    <Div>
      <b-card
        class="card"
        v-for="(place, index) in places"
        v-bind:key="index"
        :title="place.activity"
      >
        <b-card-text>{{ place.address }}</b-card-text>

        <router-link
          :to="{name: 'detail', params: {id: id, detailId: place.id, description: place.description, address: place.address}}"
        >
          <b-button class="button">Zobrazit více</b-button>
        </router-link>
      </b-card>
    </Div>
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

<style scoped>
* {
  margin: 0;
}
.button {
  color: whitesmoke;
  background-color: #0da5ce;
}
.card-body {
  margin: 15px;
}
.card-title {
  color: #4dad38;
}
</style>
