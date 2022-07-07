<!--info-header-start--><h1>自定义元素 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Web%20Components-999" alt="#Web Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdkMFOwzAQRH9l8KVtJJI7clKBhNQiekOcfImSbZqS2Fa8LkJR/p1NghDiuOsZv9kZ1aP36S2SelA6VEPrGYE4enSlbfINh01hrLFt793AGOHsyUXLVGPCeXA9jBK3UbMoSxJjkeDY+456sgy+ECpXE9ihGqhkQokqBhYjrZp0sZzKDxGJ2kX2keHO8GVDCBf3KYgDdZ3De6T0GowSS5IZWzkbeF6+BOQi2u/3a47fjNvtDnmBURCoXRUXXkP8vKKfvo711qjSe6N2d2lrLQ2Ht9Pr8puWs+6vAT2FIElyY/7FkLnQ2aoqZvC0m+E6W2tcatNM0oWcLROg6/aGts5/kOKWhbzo7I9MTd+Fm4nR" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


你听说过 `Web Components` 吗 ? 

Vue 能很好地解析和创建 `Web Components` 。

在这个挑战中，我们将尝试了解它，让我们开始吧 👇: 

```vue
<script setup lang='ts'>

import { onMounted } from "vue"

/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
*/
const VueJs = "???"

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=22%20-%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%83%E7%B4%A0" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A22+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
