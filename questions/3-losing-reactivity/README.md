<!--info-header-start--><h1>losing-reactivity <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AUtilities-999" alt="#Reactivity:Utilities"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmZ1bmN0aW9uIHVzZUNvdW50KCkge1xuICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHtcbiAgICBjb3VudDogMCxcbiAgfSlcblxuICBmdW5jdGlvbiB1cGRhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHN0YXRlLmNvdW50ID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgdXBkYXRlLFxuICB9XG59XG5cbi8vIE1ha2UgZW5zdXJlIHRoZSBkZXN0cnVjdHVyZSB3aXRob3V0IGxvc2luZyByZWFjdGl2aXR5XG5jb25zdCB7IHN0YXRlOiB7IGNvdW50IH0sIHVwZGF0ZSB9ID0gdXNlQ291bnQoKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50LTEpXCI+LTwvc3Bhbj5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgICA8c3BhbiBAY2xpY2s9XCJ1cGRhdGUoY291bnQrMSlcIj4rPC9zcGFuPlxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


In `JavaScript`, We always destructure/spread objects.

In `Vue.js`, We also destructure/spread the `reactive` object,but it'll losing the reactivity.

How to make ensure the destructure without losing reactivity ? Go ! 


```ts
<script setup lang="ts">
import { reactive } from "vue"

function useCount() {
  const state = reactive({
    count: 0,
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state,
    update,
  }
}

// Make ensure the destructure without losing reactivity
const { state: { count }, update } = useCount()

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

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
