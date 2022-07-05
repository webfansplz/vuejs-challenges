<script setup lang="ts">
// Add code to make the `count` value injected into the child component.
import { inject } from "vue"
  
const count = inject('count')
</script>

<template>
  {{ count }}
</template>
