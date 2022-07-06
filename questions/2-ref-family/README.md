<!--info-header-start--><h1>ref family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVE1v2zAM/SuET/lo7CbdyXC6DT3vMmw3HaoocqJFkQRJdlFk+e+jKceJuwW7GKQsvvf4IZ6yr87lbSOzMquC8MpFCDI2DjQ3uzXLYmDZMzPq6KyPcAIv6wf43n285CKqVsIZam+PwDKEYRkzzAhrQgRlVFRcw7oLmiwfp5cfwjYm9sfdKTNFAS97rrU0OwnLEn66LY+yu8BM3RjksQYaOpy0XDdyCidmADAOlek8z5k5E9BshuezG7RViY4UB1A1xL2EV2J/BRWAdwRgN7+kiAiAYd/4QdIt20TXRNigGmZmRVJutcy13U1umOEzLKGER2ZSHn/RP2Ey5s1zl5L5N0f0WDmiGZLti/fSiU0pl2Ca40Z6+N3Vv0rO87UQd3EBC34VT1iwXq+BOkJVG5H1zp18PpV0ILD72KBUwdp6tJy3Tvr4DqieQ7CNF10H+yG5rfIPFJkAthSPrQjvRqD3puIeVEQ/hV8wE+mxiTwqs6MsP9zAUK37EaH/NKjcbKFVQi5a6QO/2+Nr/dOABuTBGg3qJ1Tj2toSlg+dueG+hBWa52Go8S+2pZ/qadcQsccnlKiGIaVRH+XRFSDJDkmVVztluMZZIMScGjafj0eQFOZ4gzq5ujyiEfIFCbgOdsRBozhAfMS+5SX4J4KvirQfcBugEyWmhADoAVRb1ZKBpusNNIPjBr4IrcQBN0n/fOn5LZZTXCsLhMQrQ8Dp1K+GM07lfzHmhDEfYVRFoq+KpKgqbnRm5z8GuaxW" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: ref` to solve the problem at hand. 
Here's what you need to implement 👇: 

```vue
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=2%20-%20ref%20family" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A2+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
