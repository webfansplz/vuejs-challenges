<!--info-header-start--><h1>动态CSS值 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuY29uc3QgdGhlbWUgPSByZWYoXCJyZWRcIilcblxuY29uc3QgY29sb3JzID0gW1wiYmx1ZVwiLCBcInllbGxvd1wiLCBcInJlZFwiLCBcImdyZWVuXCJdXG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgdGhlbWUudmFsdWUgPSBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldXG59LCAxMDAwKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cD5oZWxsbzwvcD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBNb2RpZnkgdGhlIGNvZGUgdG8gYmluZCB0aGUgZHluYW1pYyBjb2xvciAqL1xucCB7XG4gIGNvbG9yOiByZWRcbn1cbjwvc3R5bGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->




`Vue`单文件组件 `<style>` 模块支持给CSS绑定动态值.

你知道它是什么吗 ? 让我们试试👇:

```ts
<script setup>
import { ref } from "vue"
const theme = ref("red")

const colors = ["blue", "yellow", "red", "green"]

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)

</script>

<template>
  <p>hello</p>
</template>

<style scoped>
/* 修改以下代码绑定动态颜色 */
p {
  color: red
}
</style>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
