<!--info-header-start--><h1>优化性能的指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/> <img src="https://img.shields.io/badge/-%23Built--ins-999" alt="#Built-ins"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudCA9IHJlZigwKVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvdW50LnZhbHVlKytcbn0sIDEwMDApXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8c3Bhbj5NYWtlIGl0IG5ldmVyIGNoYW5nZToge3sgY291bnQgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


`Vue.js` 提供了一个指令，以便只渲染一次元素和组件，并且跳过以后的更新。

你知道它是什么吗 ? 让我们试试👇:

```ts
<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span>使它从不更新: {{ count }}</span>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
