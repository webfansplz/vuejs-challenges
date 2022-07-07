<!--info-header-start--><h1>render function[h()] <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpVkMtugzAQRX/lyhtIlMI+IlHbrPsHbAgMFNUPZA9VI8S/13ZMmlqyLN+58zqLeJum4nsmcRSVa+04MRzxPEE2ejjVgl0tzrWt9agmYxkft/eZ2Wj01ijUoig3pQjW4Ay3NdoxjL7Isf3CCfkOpzOWEAJC0EgqpBnyLHmyXYitW35V3oeJraPApCbZMEUFqB6DHLvRNVdJnZ+2b6SjWuC1nR0b9dKG0l5PTdIq8EfdcI35qdxjjeioyn/txEE8belRJRgLOupHTRfj/5o0Y924eKR/NOgn2r25mWV8n5PyhEU3io7Itk7Z4S5b0h1ZDzDZgsKz1fjMy/0enYEzinjUA/ZlpAhEjutOrL9D+qg5" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
