<template>
  <div :class="$style.root">
    <div :class="$style.logo">
      <h1 @click="router.push('/')">Many-Money</h1>
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
import { router } from '../../router'
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
}

.logo {
  display: grid;
  align-items: center;
}

.logo > h1 {
  cursor: pointer;
  color: #ff8c00;
  margin: 0 auto;
}

.navigation{
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  align-items: center;
  margin: 0 auto;
}
</style>
