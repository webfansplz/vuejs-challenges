<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

/**
 * Make the `plusOne` can be written.
 * So we'll get the result is `plusOne` to be 3, and `count` to be 2.
*/

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
