<!--info-header-start--><h1>render function[h()] <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdVMFy2jAQ/ZUdXWJnHHNnIJOGHtMeOu2p7kHYC2hqSx5rXWAI/96VZBmX9BByMNirt6v33q50Ep/aNv/To5iLhS071RJYpL6FWurtshBkC/FYdIVWTWs6gi/H557IaNh0poFC5LMYKYSDuac02hIYvapV+RuWkKSwfISTWwJwi6bGvDbbpBADqBCpWz3HCotZ4OJ39gHCpq0loY8ALEYe80pZua6xYrIbWVssBDyVvSXTPJSuNsfHXYZsgOYI68A6lBtVeMRi9s92IhNxOSfLTg1enKDCjdK4MvytUROcoy3s6MUPPHg4g2Vf+/9pUjIYo2WDc7iLO91lIdyhrrBjCweYi1Dfadgls/t7qAxY0yApvYX7mXcRwPt4Tpm34uRDTmjpinlj+infJybMoi099KRq7vnYcCfSNWONGSjKgMVgOVWqXJpLeN+MMCwW5P5/8+pg0+uSFGfskrQQ2TgxrEURw4IJFuTEnytcmCyCfSfblksug8Qk4tMACvSTAZVjjQ33ICe5/cr+52ReTClrfDF77FbSYpKmHHx2XIeB4VF1FvPvSC+OoKMk7VGXN/DKIgyg7Uxr55dvgFh4DtT1mMWF8/DmSPxHFI9XNeWbSyL2u+dGRTmf/QxW7LZXASD3Uo0kc4Zvtzx1hfBHaND81r1GEXGVCyxU/8HdGutfeWVrw9NyU+smFrnsK4vCqZrznF0OtXivVYQHmrR4UuEt83CpgJc6HGLf8duH8IM2p3mgEO7V19exzgj4GVmGq68Qv4K0711Pu+OlG+4R578XNAUM" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
