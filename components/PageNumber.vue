<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $slidev } = useSlideContext()
</script>

<template>
  <div style="
    position: absolute;
    bottom: 0.3em;
    right: 0.8em
  ">
    {{ $slidev.nav.currentPage }}
  </div>
</template>