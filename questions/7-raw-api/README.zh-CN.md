<!--info-header-start--><h1>原始值 API <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23reactivity-999" alt="#reactivity"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlLCBpc1JlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IHN0YXRlID0geyBjb3VudDogMSB9XG5jb25zdCByZWFjdGl2ZVN0YXRlID0gcmVhY3RpdmUoc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWUuXG4qL1xuY29uc29sZS5sb2cocmVhY3RpdmVTdGF0ZSA9PT0gc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIGZhbHNlLlxuKi9cbmNvbnN0IGluZm8gPSB7IGNvdW50OiAxIH1cbmNvbnN0IHJlYWN0aXZlSW5mbyA9IHJlYWN0aXZlKGluZm8pXG5cbmNvbnNvbGUubG9nKGlzUmVhY3RpdmUocmVhY3RpdmVJbmZvKSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IHJlYWN0aXZlU3RhdGUuY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你将使用 `响应式 API: [xx]Raw` 来完成它. 
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
