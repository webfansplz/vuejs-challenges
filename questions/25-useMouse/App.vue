<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
// Implement ...
function useEventListener(target, event, callback) {
	target.addEventListener(event, callback)
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}

// Implement ...
interface Options {
  initial?: { x: number, y: number }
}
function useMouse(options: Options = {}) {
  const { initial = { x: 0, y: 0 } } = options
  const x = ref(initial.x)
  const y = ref(initial.y)
  const mouseMoveHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  }
  
  useEventListener(window, "mousemove", mouseMoveHandler)
  
  return { x, y }
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
