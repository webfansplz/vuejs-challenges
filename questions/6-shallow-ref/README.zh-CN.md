<!--info-header-start--><h1>ref 全家桶</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgUmVmLCByZWFjdGl2ZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBpbml0aWFsID0gcmVmKDEwKVxuY29uc3QgY291bnQgPSByZWYoMClcblxuLy8gQ2hhbGxlbmdlIDE6IFVwZGF0ZSByZWZcbmZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAvLyBpbXBsLi4uXG59XG5cbi8qKlxuICogQ2hhbGxlbmdlIDI6IENoZWNrcyBpZiBgY291bnRgIGlzIGEgcmVmIG9iamVjdC5cbiAqIE1ha2UgdGhlIG91dHB1dCB0byBiZSAxXG4qL1xuY29uc29sZS5sb2coXG4gIC8vIGltcGwgPyAxIDogMFxuKVxuXG4vKipcbiAqIENoYWxsZW5nZSAzOiBVbndyYXAgcmVmXG4gKiBNYWtlIHRoZSBvdXRwdXQgdG8gYmUgdHJ1ZVxuKi9cbmZ1bmN0aW9uIGluaXRpYWxDb3VudCh2YWx1ZTogbnVtYmVyIHwgUmVmPG51bWJlcj4pIHtcbiAgLy8gTWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbiAgY29uc29sZS5sb2codmFsdWUgPT09IDEwKVxufVxuXG5pbml0aWFsQ291bnQoaW5pdGlhbClcblxuLyoqXG4gKiBDaGFsbGVuZ2UgNDpcbiAqIGNyZWF0ZSBhIHJlZiBmb3IgYSBwcm9wZXJ0eSBvbiBhIHNvdXJjZSByZWFjdGl2ZSBvYmplY3QuXG4gKiBUaGUgY3JlYXRlZCByZWYgaXMgc3luY2VkIHdpdGggaXRzIHNvdXJjZSBwcm9wZXJ0eTpcbiAqIG11dGF0aW5nIHRoZSBzb3VyY2UgcHJvcGVydHkgd2lsbCB1cGRhdGUgdGhlIHJlZiwgYW5kIHZpY2UtdmVyc2EuXG4gKiBNYWtlIHRoZSBvdXRwdXQgdG8gYmUgdHJ1ZVxuKi9cbmNvbnN0IHN0YXRlID0gcmVhY3RpdmUoe1xuICBmb286IDEsXG4gIGJhcjogMixcbn0pXG5jb25zdCBmb29SZWYgPSByZWYoKSAvLyBjaGFuZ2UgdGhlIGltcGwuLi5cblxuLy8gbXV0YXRpbmcgdGhlIHJlZiB1cGRhdGVzIHRoZSBvcmlnaW5hbFxuZm9vUmVmLnZhbHVlKytcbmNvbnNvbGUubG9nKHN0YXRlLmZvbyA9PT0gMilcblxuLy8gbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGFsc28gdXBkYXRlcyB0aGUgcmVmXG5zdGF0ZS5mb28rK1xuY29uc29sZS5sb2coZm9vUmVmLnZhbHVlID09PSAzKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50LTEpXCI+LTwvc3Bhbj5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgICA8c3BhbiBAY2xpY2s9XCJ1cGRhdGUoY291bnQrMSlcIj4rPC9zcGFuPlxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你将使用 `响应式 API: shallowRef` 来完成它. 
以下是你要实现的内容 👇: 

```ts
<script setup lang="ts">
import { shallowRef, watch } from "vue"

const state = shallowRef({ count: 1 })

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * 修改以下代码使watch回调被触发
 *
*/
state.value.count = 2

</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
