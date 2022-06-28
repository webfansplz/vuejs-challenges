<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the composable function
 * Make the function work fine
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get localStorage via triggered the getter:
console.log(counter.value)

// And We also can set localStorage via triggered the setter:

counter.value = 1

</script>
