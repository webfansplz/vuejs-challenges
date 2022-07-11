<script setup>
import { ref } from "vue"

const count = ref(0)
const counter = ref(null)

function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
  */
  console.log(+counter.value.textContent === 1)
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
