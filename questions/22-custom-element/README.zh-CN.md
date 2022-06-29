<!--info-header-start--><h1>自定义元素 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Web%20Components-999" alt="#Web Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IG9uTW91bnRlZCB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY29kZSB0byBjcmVhdGUgYSBjdXN0b20gZWxlbWVudC5cbiAqIE1ha2UgdGhlIG91dHB1dCBvZiBwYWdlIHNob3cgXCJIZWxsbyBWdWUuanNcIi5cbiovXG5jb25zdCBWdWVKcyA9IFwiPz8/XCJcblxub25Nb3VudGVkKCgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhLmlubmVySFRNTCA9IFwiPHZ1ZS1qcyBtZXNzYWdlPVxcXCJIZWxsbyBWdWUuanNcXFwiPjwvdnVlLWpzPlwiXG59KVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


你听说过 `Web Components` 吗 ? 

Vue 能很好地解析和创建 `Web Components` 。

在这个挑战中,我们将尝试了解它,让我们开始吧 👇: 

```ts
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
