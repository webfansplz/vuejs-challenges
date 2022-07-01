<!--info-header-start--><h1>原始值 API <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlLCBpc1JlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IHN0YXRlID0geyBjb3VudDogMSB9XG5jb25zdCByZWFjdGl2ZVN0YXRlID0gcmVhY3RpdmUoc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWUuXG4qL1xuY29uc29sZS5sb2cocmVhY3RpdmVTdGF0ZSA9PT0gc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIGZhbHNlLlxuKi9cbmNvbnN0IGluZm8gPSB7IGNvdW50OiAxIH1cbmNvbnN0IHJlYWN0aXZlSW5mbyA9IHJlYWN0aXZlKGluZm8pXG5cbmNvbnNvbGUubG9nKGlzUmVhY3RpdmUocmVhY3RpdmVJbmZvKSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IHJlYWN0aXZlU3RhdGUuY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: [xx]Raw` 来完成它。
以下是你要实现的内容 👇: 

```ts
<script setup lang="ts">
import { reactive, isReactive } from "vue"

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * 修改以下代码使输出为true
*/
console.log(reactiveState === state)

/**
 * 修改以下代码使输出为false
*/
const info = { count: 1 }
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


```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=7%20-%20%E5%8E%9F%E5%A7%8B%E5%80%BC%20API" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A7+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
