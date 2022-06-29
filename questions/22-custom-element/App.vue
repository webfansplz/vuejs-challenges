<script setup lang='ts'>

import { onMounted } from "vue"

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
*/
const VueJs = "???"

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>
