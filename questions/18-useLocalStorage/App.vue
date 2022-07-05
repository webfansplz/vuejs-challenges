<script setup lang='ts'>
import { ref, watchEffect } from "vue"

/**
 * Implement the composable function
 * Make the function work fine
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

// We can get localStorage via triggered the getter:
console.log(counter.value)
console.log(JSON.parse(localStorage.getItem('counter') as string))

// And We also can set localStorage via triggered the setter:
counter.value = 1
console.log(JSON.parse(localStorage.getItem('counter') as string))
</script>
