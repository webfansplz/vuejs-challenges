<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * Challenges 1: Watch once
 * Make sure the watch callback only trigger once
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * Challenges 2: Watch object
 * Make sure the watch callback triggered
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * Challenges 3: Callback Flush Timing
 * Make sure visited the updated eleRef
*/

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
})
age.value = 18

</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>
