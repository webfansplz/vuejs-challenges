<script setup>
import { ref } from 'vue'
const value = ref("")
</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>
