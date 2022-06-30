<!--info-header-start--><h1>custom ref <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcInZ1ZVwiXG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBmdW5jdGlvblxuKi9cbmZ1bmN0aW9uIHVzZURlYm91bmNlZFJlZih2YWx1ZSwgZGVsYXkgPSAyMDApIHtcblxufVxuY29uc3QgdGV4dCA9IHVzZURlYm91bmNlZFJlZihcImhlbGxvXCIpXG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZSBjYWxsYmFjayBvbmx5IHRyaWdnZXJlZCBvbmNlIHdoZW4gZW50ZXIgbXVsdGlwbGUgdGltZXMgaW4gYSBjZXJ0YWluIHRpbWVvdXRcbiovXG53YXRjaCh0ZXh0LCAodmFsdWUpID0+IHtcbiAgY29uc29sZS5sb2codmFsdWUpXG59KVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGlucHV0IHYtbW9kZWw9XCJ0ZXh0XCIgLz5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


The `debounce function` is so useful in the input box manipulation scenarios.

A `debounced ref` is even more flexible in `Vue.js`, let's go 👇: 

```ts
<script setup>
import { watch } from "vue"

/**
 * Implement the function
*/
function useDebouncedRef(value, delay = 200) {

}
const text = useDebouncedRef("hello")

/**
 * Make sure the callback only triggered once when enter multiple times in a certain timeout
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=23%20-%20custom%20ref" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A23+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
