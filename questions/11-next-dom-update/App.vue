<script setup>
import { ref, nextTick } from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
  */
	nextTick(() => {
    console.log(+document.getElementById("counter").textContent === 1)
  })
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>
