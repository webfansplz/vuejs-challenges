<!--info-header-start--><h1>渲染函数[h()] <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdVMFy2jAQ/ZUdXWJnHHNnIJOGHtMeOu2p7kHYC2hqSx5rXWAI/96VZBmX9BByMNirt6v33q50Ep/aNv/To5iLhS071RJYpL6FWurtshBkC/FYdIVWTWs6gi/H557IaNh0poFC5LMYKYSDuac02hIYvapV+RuWkKSwfISTWwJwi6bGvDbbpBADqBCpWz3HCotZ4OJ39gHCpq0loY8ALEYe80pZua6xYrIbWVssBDyVvSXTPJSuNsfHXYZsgOYI68A6lBtVeMRi9s92IhNxOSfLTg1enKDCjdK4MvytUROcoy3s6MUPPHg4g2Vf+/9pUjIYo2WDc7iLO91lIdyhrrBjCweYi1Dfadgls/t7qAxY0yApvYX7mXcRwPt4Tpm34uRDTmjpinlj+infJybMoi099KRq7vnYcCfSNWONGSjKgMVgOVWqXJpLeN+MMCwW5P5/8+pg0+uSFGfskrQQ2TgxrEURw4IJFuTEnytcmCyCfSfblksug8Qk4tMACvSTAZVjjQ33ICe5/cr+52ReTClrfDF77FbSYpKmHHx2XIeB4VF1FvPvSC+OoKMk7VGXN/DKIgyg7Uxr55dvgFh4DtT1mMWF8/DmSPxHFI9XNeWbSyL2u+dGRTmf/QxW7LZXASD3Uo0kc4Zvtzx1hfBHaND81r1GEXGVCyxU/8HdGutfeWVrw9NyU+smFrnsK4vCqZrznF0OtXivVYQHmrR4UuEt83CpgJc6HGLf8duH8IM2p3mgEO7V19exzgj4GVmGq68Qv4K0711Pu+OlG+4R578XNAUM" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

在这个挑战中，你需要使用`h`渲染函数来实现一个组件。

请注意: 你应该确保参数被正确传递、事件被正常触发和插槽内容正常渲染。让我们开始吧。

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


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=218%20-%20%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0%5Bh()%5D" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A218+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
