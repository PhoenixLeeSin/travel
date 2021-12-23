<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList :cities="cities" :hotCities="hotCities" />
    <CityAlphabet :alphabetArray="alphabetArray" />
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      cities: {},
      hotCities: [],
      alphabetArray: [],
    }
  },
  methods: {
    getCityData() {
      axios.get('/mock/city.json').then(this.getCityInfoSuc)
    },
    getCityInfoSuc(res) {
      res = res.data
      if (res.ret && res.data) {
        res = res.data
        this.cities = res.cities
        this.hotCities = res.hotCities
        this.alphabetArray = Object.keys(res.cities)
      }
    },
  },
  mounted() {
    this.getCityData()
  },
}
</script>

<style lang="stylus" scoped></style>
