<template>
  <div :class="$style.root">
    <div :class="$style.exchange_currency">
      <div>RUR</div>
      <div>USD</div>
      <div>EUR</div>
      <div>GBR</div>
      <div>GBR</div>
      <select id="select" name="V"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {

}

.exchange_item {
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(5 1fr);
}
</style>
