<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderMenu/>
    </div>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer">
      <!-- {{ result }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { baseURL, instance } from './api/axios'
import { HeaderMenu } from './components/HeaderMenu'
import { Currency } from './types/types'

// const result = await fetch(baseURL).then(res => res.json)
// console.log(result)
const result: Currency[] = await getData()
// console.log(JSON.parse(result))
console.log(result)

async function getData(): Promise<Currency[]> {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  const result = JSON.parse(response)
  // const result = await response.json()

  return await result
}

// const result: JSON = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then(v => v.json())
// console.log(result)
// const result = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
// const result2 = result.data
// console.log(result)
</script>

<style module>
:root {
  color: #141414;
  background-color: #ffffff;
}
.root {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'header' 'body' 'footer';
  height: 100vh;
  background-color: #141414;
  color: #ffffff;
}

.header {

}

.footer{
  height: 80px;
  width: 100%;
}
</style>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Jost', sans-serif;
  color: red;
}

a {
  text-decoration: none;
}
</style>
