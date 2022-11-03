<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderMenu/>
    </div>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer">
      IM FOOTER
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from './components/HeaderMenu'

</script>

<style module>
.root {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'header' 'body' 'footer';
  height: 100vh;
  pointer-events: none;
}

.header {
  pointer-events: none;

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
  color: red;
}

a {
  text-decoration: none;
}
</style>
