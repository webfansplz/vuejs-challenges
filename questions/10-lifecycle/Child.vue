<script setup lang="ts">
import { onMounted, onUnmounted, inject } from "vue"

const timer = inject("timer")
const count = inject("count")

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval()
})
</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
