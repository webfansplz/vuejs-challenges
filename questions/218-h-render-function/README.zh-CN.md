<!--info-header-start--><h1>渲染函数[h()] <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpVkMtugzAQRX/lyhtIlMI+IlHbrPsHbAgMFNUPZA9VI8S/13ZMmlqyLN+58zqLeJum4nsmcRSVa+04MRzxPEE2ejjVgl0tzrWt9agmYxkft/eZ2Wj01ijUoig3pQjW4Ay3NdoxjL7Isf3CCfkOpzOWEAJC0EgqpBnyLHmyXYitW35V3oeJraPApCbZMEUFqB6DHLvRNVdJnZ+2b6SjWuC1nR0b9dKG0l5PTdIq8EfdcI35qdxjjeioyn/txEE8belRJRgLOupHTRfj/5o0Y924eKR/NOgn2r25mWV8n5PyhEU3io7Itk7Z4S5b0h1ZDzDZgsKz1fjMy/0enYEzinjUA/ZlpAhEjutOrL9D+qg5" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

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
