<!--info-header-start--><h1>watch family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFk11rwjAUhv/KIVdVxKq7GVKFIexuDIawm9zUeqyZMQ1N6hil/30nH1Unc7tLTt6T933y0bInrcenBtmcZaaohbZg0DYaZK7KBWfWcLbkShx1VVtoocbdCD5zW+yhg11dHYEzaueMK66KShkLRdUoCwsnTSYDV0+HQ65gCKt9LiWqEmE6h3e/SaUK9Gsv+QHBNDWC3WN0KEi+yYsDqeQX2FqUJdYm9gxTrrws8YYjSAawWEJLu1EEZSqJY1mVCWevV924De2MgnU+nO8en3LZIIWeckX8a3HEqrFJ2PKnYnYHaXZG2nxgYf+HEuYSKuCE8zM2t87InV+kIf85TEZ95IDtdX9gr8nSa8bhRhq9pcn2Cj2serCoIbzf6R7msOqDP8vG7IHOSKjyBvMkjCAPjxv9ACW+4S4Q9oyhFiEpS6jmZBRK7pADJdXuMoZdAkCEIvnlLh+dYZaGd02vmCYWj1pSLJoBZFtx8gMa6jgAaNv4hLsurqX9YqZdOvoWkcl9jXOTS3/bkqXBIkuvjFn3DXXSKT8=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: watch` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * Challenge 1: Watch once
 * Make sure the watch callback is only triggered once
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * Challenges 2: Watch object
 * Make sure the watch callback is triggered
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * Challenge 3: Callback Flush Timing
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

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=5%20-%20watch%20family" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A5+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
