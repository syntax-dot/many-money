<template>
  <div :class="$style.root">
    <div :class="$style.switcher"/>
    <input>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
  params: { format: 'json', from: 'AUD', to: 'CAD', amount: '1' },
  headers: {
    'X-RapidAPI-Key': 'd7d8182ca9mshbf80c3effdf9a9cp1766b7jsn29fec93366c0',
    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
  },
}

axios.request(options).then(function(response) {
  console.log(response.data)
}).catch(function(error) {
  console.error(error)
})
</script>

<style module>
.root {

}
</style>
