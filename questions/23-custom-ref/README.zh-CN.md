<!--info-header-start--><h1>自定义ref <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcInZ1ZVwiXG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBmdW5jdGlvblxuKi9cbmZ1bmN0aW9uIHVzZURlYm91bmNlZFJlZih2YWx1ZSwgZGVsYXkgPSAyMDApIHtcblxufVxuY29uc3QgdGV4dCA9IHVzZURlYm91bmNlZFJlZihcImhlbGxvXCIpXG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZSBjYWxsYmFjayBvbmx5IHRyaWdnZXJlZCBvbmNlIHdoZW4gZW50ZXIgbXVsdGlwbGUgdGltZXMgaW4gYSBjZXJ0YWluIHRpbWVvdXRcbiovXG53YXRjaCh0ZXh0LCAodmFsdWUpID0+IHtcbiAgY29uc29sZS5sb2codmFsdWUpXG59KVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGlucHV0IHYtbW9kZWw9XCJ0ZXh0XCIgLz5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


防抖函数在输入框操作场景中非常有用。

一个 防抖的`ref`在`Vue.js`更加灵活, 让我们开始吧 👇: 

```ts
<script setup>
import { watch } from "vue"

/**
 * 补全以下函数来实现防抖ref :
*/
function useDebouncedRef(value, delay = 200) {

}
const text = useDebouncedRef("hello")

/**
 * 确保在输入框快速输入时, 只触发一次回调。
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
