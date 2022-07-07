<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
*/
function onInput(event: Event) {
  value.value = (<HTMLInputElement>event.target).value
}
  
const VOhModel = {
	mounted(el, binding) {
    el.value = binding.value
    el.addEventListener('input', onInput)
  },
  unmounted(el) {
    el.removeEventListener('input', onInput)
  },
}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
</template>
