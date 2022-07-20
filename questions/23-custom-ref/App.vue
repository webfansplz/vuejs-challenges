<script setup>
import { watch } from "vue"

/**
 * Implement the function
*/
function useThrottledRef(value, delay = 200) {

}
const text = useThrottledRef("hello")

/**
 * Make sure the callback only gets triggered once when entered multiple times in a certain timeout
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>
