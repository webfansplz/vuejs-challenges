<script setup lang='ts'>
import { ref } from 'vue';
interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * Implement the composable function
 * Make sure the function works correctly
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
	const count = ref(initialValue);
  const { min = 0, max = 10 } = options
  const setCount = (newValue) => {
    if(newValue < min || newValue > max) return; 
    count.value = newValue
  }
  
  const inc = () => setCount(count.value + 1);
  const dec = () => setCount(count.value - 1);
  const reset = () => setCount(initialValue);
  
  return {
    count,
    inc,
    dec,
    reset
  }
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="inc">
    inc
  </button>
  <button @click="dec">
    dec
  </button>
  <button @click="reset">
    reset
  </button>
</template>
