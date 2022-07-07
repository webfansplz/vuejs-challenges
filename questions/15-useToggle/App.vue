<script setup lang='ts'>
import { ref, watchEffect } from 'vue';

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
*/
function useToggle(initialValue) {
	const state = ref(initialValue);
  const setState = () => state.value = !state.value
  
  return [state, setState]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>
