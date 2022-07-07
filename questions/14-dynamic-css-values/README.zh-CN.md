<!--info-header-start--><h1>动态CSS <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNUEFuhDAM/IqVE6AVUKmnFYvUYw/7gk0PLDEFKcRRErZCiL/XSVSpN3vsGc/4EB/W1q8NxVV0fnSLDeAxbLaXZlktuQAHOJzghMnRClLwrhTSjGR8gDDjinCLG4UUDpUUpTR/05E0Oc/jhxRPHXkXFthRa/rJdWLE4tshGim+Ipnvf5qA7jXooijh1sMhDeRbNYNbvJi1H/chzPWkiVyRSjcYRSuzKngvWe28wFvbtslU1+SAHI2bgKvVQ0DuADrbz9FW18TgXfNvyK0Pu0bwI1lUjDQV3Ekt0x4tsRGFEAiei1EJULsZ1mXMDqFqpLE5QAKu/CvFvpKdqMuC4vwFPjyGKQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->




`Vue`单文件组件 `<style>` 模块支持给CSS绑定动态值。

你知道它是什么吗 ? 让我们试试👇:

```vue
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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=14%20-%20%E5%8A%A8%E6%80%81CSS" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A14+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
