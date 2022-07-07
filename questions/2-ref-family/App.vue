<script setup lang="ts">
import { ref, isRef, unref, toRef, Ref, reactive } from "vue"

const initial = ref(10)
const count = ref(0)

// Challenge 1: Update ref
function update(value) {
  count.value = value
}

/**
 * Challenge 2: Check if the `count` is a ref object.
 * Make the output be 1
*/
console.log(
  isRef(count) ? 1 : 0
)

/**
 * Challenge 3: Unwrap ref
 * Make the output be true
*/
function initialCount(value: number | Ref<number>) {
  // Make the output be true
  console.log(unref(value) === 10)
}

initialCount(initial)

/**
 * Challenge 4:
 * create a ref for a property on a source reactive object.
 * The created ref is synced with its source property:
 * mutating the source property will update the ref, and vice-versa.
 * Make the output be true
*/
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = toRef(state, 'foo') // change the impl...

// mutating the ref updates the original
fooRef.value++
console.log(state.foo === 2)

// mutating the original also updates the ref
state.foo++
console.log(fooRef.value === 3)

</script>

<template>
  <div>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>
