<!--info-header-start--><h1>Raw API <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23reactivity-999" alt="#reactivity"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlLCBpc1JlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IHN0YXRlID0geyBjb3VudDogMSB9XG5jb25zdCByZWFjdGl2ZVN0YXRlID0gcmVhY3RpdmUoc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWUuXG4qL1xuY29uc29sZS5sb2cocmVhY3RpdmVTdGF0ZSA9PT0gc3RhdGUpXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgb3V0cHV0IHRvIGJlIGZhbHNlLlxuKi9cbmNvbnN0IGluZm8gPSB7IGNvdW50OiAxIH1cbmNvbnN0IHJlYWN0aXZlSW5mbyA9IHJlYWN0aXZlKGluZm8pXG5cbmNvbnNvbGUubG9nKGlzUmVhY3RpdmUocmVhY3RpdmVJbmZvKSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IHJlYWN0aXZlU3RhdGUuY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: [xx]Raw` to finish it. 
Here's what you need to implement 👇: 

```ts
<script setup lang="ts">
import { reactive, isReactive } from "vue"

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * Modify the code so that make the output to be true.
*/
console.log(reactiveState === state)

/**
 * Modify the code so that make the output to be false.
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

Click the `Take the Challenge` button to start coding! Happy Hacking!
