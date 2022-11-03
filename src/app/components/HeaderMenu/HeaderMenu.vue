<template>
  <div :class="$style.root">
    <div :class="$style.logo">
      <h1>Many-Money</h1>
    </div>

    <div :class="$style.navigation">
      <NavigationLink v-for="link in links"
                      :key="link.title"
                      :title="link.title"
                      :to="link.to"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavigationLink } from '../NavigationLink'
import { NavigationLinkProps } from '../NavigationLink/NavigationLink.props'

const links: NavigationLinkProps[] = [
  { title: 'Market Trend', to: { name: 'marketTrend' } },
  { title: 'Exchange', to: { name: 'exchange' } },
]
</script>

<style module>
.root {
  display: grid;
  grid-auto-flow: column;
  height: 80px;
  width: 100%;
  display: grid;
  pointer-events: none;
}

.logo {
  display: grid;
  align-items: center;
}

.navigation{
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}
</style>
