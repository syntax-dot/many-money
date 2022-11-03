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

}

.root:hover {

}
</style>
