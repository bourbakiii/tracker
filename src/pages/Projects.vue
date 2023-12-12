<script setup>
  import SpeedDialRounded from "@/components/SpeedDial/Rounded.vue"
  import { onMounted } from 'vue'
  import { initDials  } from 'flowbite'

  // initialize components based on data attribute selectors
  onMounted(() => {
    initDials();
  })
</script>

<template>
  <SpeedDialRounded/>
</template>

<style scoped lang="scss">
</style>