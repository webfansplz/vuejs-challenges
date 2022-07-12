<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
*/
const VOhModel = {

}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
  <p>{{ value }}</p>
</template>
