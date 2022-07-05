<!--info-header-start--><h1>render function[h()] <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IE15QnV0dG9uIGZyb20gXCIuL015QnV0dG9uLnRzXCJcclxuXHJcbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ29uQ2xpY2snKVxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8TXlCdXR0b24gOmRpc2FibGVkPVwiZmFsc2VcIiBAY3VzdG9tLWNsaWNrPVwib25DbGlja1wiPlxyXG4gICAgbXkgYnV0dG9uXHJcbiAgPC9NeUJ1dHRvbj5cclxuPC90ZW1wbGF0ZT5cclxuIiwiTXlCdXR0b24udHMiOiJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tIFwidnVlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ015QnV0dG9uJyxcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaCgvKiogZG8gc29tZXRpbmcgKi8pXHJcbiAgfVxyXG59KSJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you need use `h` render function to implement a component. 

Note: You should make sure that the props are passed correctly, event is triggered correctly and the slot content is rendered correctly. Lets go.

```vue
<script setup lang="ts">
import MyButton from "./MyButton.ts"
const onClick = () => {
  console.log('onClick')
}
</script>

<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>

```
<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=218%20-%20render%20function%5Bh()%5D" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A218+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
