<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once
const scope = effectScope();

scope.run(() => {
  watch(doubled, () => console.log(doubled.value), { immediate: true })
  watchEffect(() => console.log("Count: ", doubled.value))
})

counter.value = 2
scope.stop()

setTimeout(() => {
  counter.value = 4
})
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
