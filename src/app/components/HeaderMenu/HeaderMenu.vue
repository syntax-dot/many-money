<template>
  <div :class="$style.root">
    <div :class="$style.logo"/>

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
  grid-template-columns: max-content max-content;
}
</style>
