<!--info-header-start--><h1>响应性丟失</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmZ1bmN0aW9uIHVzZUNvdW50KCkge1xuICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHtcbiAgICBjb3VudDogMCxcbiAgfSlcblxuICBmdW5jdGlvbiB1cGRhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHN0YXRlLmNvdW50ID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgdXBkYXRlLFxuICB9XG59XG5cbi8vIE1ha2UgZW5zdXJlIHRoZSBkZXN0cnVjdHVyZSB3aXRob3V0IGxvc2luZyByZWFjdGl2aXR5XG5jb25zdCB7IHN0YXRlOiB7IGNvdW50IH0sIHVwZGF0ZSB9ID0gdXNlQ291bnQoKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50LTEpXCI+LTwvc3Bhbj5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgICA8c3BhbiBAY2xpY2s9XCJ1cGRhdGUoY291bnQrMSlcIj4rPC9zcGFuPlxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在 `JavaScript` 中, 我们经常解构/扩展对象.

在`Vue.js`中,我们同样解构/扩展“响应式”对象,但它会失去响应性。

如何保证解构/扩展不丢失响应性 ? 让我们开始吧 !

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

// 确保解构不丢失响应性
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
