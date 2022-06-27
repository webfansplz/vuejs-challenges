<!--info-header-start--><h1>ref family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgUmVmLCByZWFjdGl2ZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBpbml0aWFsID0gcmVmKDEwKVxuY29uc3QgY291bnQgPSByZWYoMClcblxuLy8gQ2hhbGxlbmdlIDE6IFVwZGF0ZSByZWZcbmZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAvLyBpbXBsLi4uXG59XG5cbi8qKlxuICogQ2hhbGxlbmdlIDI6IENoZWNrcyBpZiBgY291bnRgIGlzIGEgcmVmIG9iamVjdC5cbiAqIE1ha2UgdGhlIG91dHB1dCB0byBiZSAxXG4qL1xuY29uc29sZS5sb2coXG4gIC8vIGltcGwgPyAxIDogMFxuKVxuXG4vKipcbiAqIENoYWxsZW5nZSAzOiBVbndyYXAgcmVmXG4gKiBNYWtlIHRoZSBvdXRwdXQgdG8gYmUgdHJ1ZVxuKi9cbmZ1bmN0aW9uIGluaXRpYWxDb3VudCh2YWx1ZTogbnVtYmVyIHwgUmVmPG51bWJlcj4pIHtcbiAgLy8gTWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbiAgY29uc29sZS5sb2codmFsdWUgPT09IDEwKVxufVxuXG5pbml0aWFsQ291bnQoaW5pdGlhbClcblxuLyoqXG4gKiBDaGFsbGVuZ2UgNDpcbiAqIGNyZWF0ZSBhIHJlZiBmb3IgYSBwcm9wZXJ0eSBvbiBhIHNvdXJjZSByZWFjdGl2ZSBvYmplY3QuXG4gKiBUaGUgY3JlYXRlZCByZWYgaXMgc3luY2VkIHdpdGggaXRzIHNvdXJjZSBwcm9wZXJ0eTpcbiAqIG11dGF0aW5nIHRoZSBzb3VyY2UgcHJvcGVydHkgd2lsbCB1cGRhdGUgdGhlIHJlZiwgYW5kIHZpY2UtdmVyc2EuXG4gKiBNYWtlIHRoZSBvdXRwdXQgdG8gYmUgdHJ1ZVxuKi9cbmNvbnN0IHN0YXRlID0gcmVhY3RpdmUoe1xuICBmb286IDEsXG4gIGJhcjogMixcbn0pXG5jb25zdCBmb29SZWYgPSByZWYoKSAvLyBjaGFuZ2UgdGhlIGltcGwuLi5cblxuLy8gbXV0YXRpbmcgdGhlIHJlZiB1cGRhdGVzIHRoZSBvcmlnaW5hbFxuZm9vUmVmLnZhbHVlKytcbmNvbnNvbGUubG9nKHN0YXRlLmZvbyA9PT0gMilcblxuLy8gbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGFsc28gdXBkYXRlcyB0aGUgcmVmXG5zdGF0ZS5mb28rK1xuY29uc29sZS5sb2coZm9vUmVmLnZhbHVlID09PSAzKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50LTEpXCI+LTwvc3Bhbj5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgICA8c3BhbiBAY2xpY2s9XCJ1cGRhdGUoY291bnQrMSlcIj4rPC9zcGFuPlxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: ref` to finish it. 
Here's what you need to implement 👇: 

```ts
<script setup lang="ts">
import { ref, Ref, reactive } from "vue"

const initial = ref(10)
const count = ref(0)

// Challenge 1: Update ref
function update(value) {
  // impl...
}

/**
 * Challenge 2: Checks if `count` is a ref object.
 * Make the output to be 1
*/
console.log(
  // impl ? 1 : 0
)

/**
 * Challenge 3: Unwrap ref
 * Make the output to be true
*/
function initialCount(value: number | Ref<number>) {
  // Make the output to be true
  console.log(value === 10)
}

initialCount(initial)

/**
 * Challenge 4:
 * create a ref for a property on a source reactive object.
 * The created ref is synced with its source property:
 * mutating the source property will update the ref, and vice-versa.
 * Make the output to be true
*/
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = ref() // change the impl...

// mutating the ref updates the original
fooRef.value++
console.log(state.foo === 2)

// mutating the original also updates the ref
state.foo++
console.log(fooRef.value === 3)

</script>

<template>
  <div>
    <h1>msg</h1>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>
```

Click the `Take the Challenge` button to start coding! Happy Hacking!
