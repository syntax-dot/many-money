<template>
  <div v-text="title"
       :class="$style.root"
       @click="$router.push(props.to)"/>
</template>

<script lang="ts" setup>
import { NavigationLinkProps } from './NavigationLink.props'

const props = defineProps<NavigationLinkProps>()
</script>

<style module>
.root {
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
}

.root:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}
</style>
