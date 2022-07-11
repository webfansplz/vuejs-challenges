<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the composable function
 * Make sure the function works correctly
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++

</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">
    Update
  </button>
</template>
