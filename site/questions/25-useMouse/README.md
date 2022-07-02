<!--info-header-start--><h1>useMouse <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuLy8gSW1wbGVtZW50IC4uLlxuZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50LCBjYWxsYmFjaykge1xuXG59XG5cbi8vIEltcGxlbWVudCAuLi5cbmZ1bmN0aW9uIHVzZU1vdXNlKCkge1xuICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJtb3VzZW1vdmVcIiwgKCkgPT4ge30pXG59XG5jb25zdCB7IHgsIHkgfSA9IHVzZU1vdXNlKClcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+TW91c2UgcG9zaXRpb24gaXMgYXQ6IHt7IHggfX0sIHt7IHkgfX08L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We should focus on Reusability when use `Vue.js`,Composables functions are a good way,let's go 👇: 


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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=25%20-%20useMouse" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A25+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
