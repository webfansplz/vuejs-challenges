<script setup lang='ts'>
import { ref, watchEffect } from "vue"

/**
 * Implement the composable function
 * Make sure the function works correctly
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref<any>(initialValue)
  if (localStorage.getItem(key)) {
    value.value = JSON.parse(localStorage.getItem(key) as string)
  }
	watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(value.value))
  })
  return value
}

const counter = useLocalStorage("counter", 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)
console.log(JSON.parse(localStorage.getItem('counter') as string))

// And we can also set localStorage by triggering the setter:

counter.value = 1
console.log(JSON.parse(localStorage.getItem('counter') as string))
</script>
