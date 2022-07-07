<script setup lang="ts">
// [xxx]Raw用来优化大型不可变数据源
import { reactive, isReactive, toRaw, markRaw } from "vue"

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * Modify the code so that we can make the output be true.
*/
console.log(toRaw(reactiveState) === state)

/**
 * Modify the code so that we can make the output be false.
*/
const info = markRaw({ count: 1 })
const reactiveInfo = reactive(info)

console.log(isReactive(reactiveInfo))


</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>
