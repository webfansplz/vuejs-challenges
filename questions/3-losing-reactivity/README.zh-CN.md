<!--info-header-start--><h1>响应性丟失 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AUtilities-999" alt="#Reactivity:Utilities"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiXG5cbmZ1bmN0aW9uIHVzZUNvdW50KCkge1xuICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHtcbiAgICBjb3VudDogMCxcbiAgfSlcblxuICBmdW5jdGlvbiB1cGRhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHN0YXRlLmNvdW50ID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgdXBkYXRlLFxuICB9XG59XG5cbi8vIE1ha2UgZW5zdXJlIHRoZSBkZXN0cnVjdHVyZSB3aXRob3V0IGxvc2luZyByZWFjdGl2aXR5XG5jb25zdCB7IHN0YXRlOiB7IGNvdW50IH0sIHVwZGF0ZSB9ID0gdXNlQ291bnQoKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50LTEpXCI+LTwvc3Bhbj5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgICA8c3BhbiBAY2xpY2s9XCJ1cGRhdGUoY291bnQrMSlcIj4rPC9zcGFuPlxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=3%20-%20%E5%93%8D%E5%BA%94%E6%80%A7%E4%B8%9F%E5%A4%B1" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A3+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
