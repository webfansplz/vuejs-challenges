<!--info-header-start--><h1>鼠标坐标 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuLy8gSW1wbGVtZW50IC4uLlxuZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50LCBjYWxsYmFjaykge1xuXG59XG5cbi8vIEltcGxlbWVudCAuLi5cbmZ1bmN0aW9uIHVzZU1vdXNlKCkge1xuICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJtb3VzZW1vdmVcIiwgKCkgPT4ge30pXG59XG5jb25zdCB7IHgsIHkgfSA9IHVzZU1vdXNlKClcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+TW91c2UgcG9zaXRpb24gaXMgYXQ6IHt7IHggfX0sIHt7IHkgfX08L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在使用`Vue.js`时,我们应该关注可复用性,可组合函数是一个很好的方式,让我们开始吧 👇: 


```ts
<script setup lang="ts">

// Implement ...
function useEventListener(target, event, callback) {

}

// Implement ...
function useMouse() {
  useEventListener(window, "mousemove", () => {})
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>


```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
