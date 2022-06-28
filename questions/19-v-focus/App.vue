<script setup lang='ts'>
import { ref } from "vue"

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element will focus/blur when toggle `state` automatically
 *
*/

const VFocus = {

}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>
