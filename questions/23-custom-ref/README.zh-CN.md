<!--info-header-start--><h1>自定义ref <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcInZ1ZVwiXG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBmdW5jdGlvblxuKi9cbmZ1bmN0aW9uIHVzZURlYm91bmNlZFJlZih2YWx1ZSwgZGVsYXkgPSAyMDApIHtcblxufVxuY29uc3QgdGV4dCA9IHVzZURlYm91bmNlZFJlZihcImhlbGxvXCIpXG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZSBjYWxsYmFjayBvbmx5IHRyaWdnZXJlZCBvbmNlIHdoZW4gZW50ZXIgbXVsdGlwbGUgdGltZXMgaW4gYSBjZXJ0YWluIHRpbWVvdXRcbiovXG53YXRjaCh0ZXh0LCAodmFsdWUpID0+IHtcbiAgY29uc29sZS5sb2codmFsdWUpXG59KVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGlucHV0IHYtbW9kZWw9XCJ0ZXh0XCIgLz5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


防抖函数在输入框操作场景中非常有用。

一个 防抖的`ref`在`Vue.js`更加灵活，让我们开始吧 👇: 

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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=23%20-%20%E8%87%AA%E5%AE%9A%E4%B9%89ref" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A23+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
