<!--info-header-start--><h1>动态CSS <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUttq4zAQ/ZVBT04wdvbCwhYny9KF3TwUlhYKadUH2Zo0orIkpElbE/LvHdlNCX2wmduZOTNHB/E7hOp5j+JCNKmLJhAkpH1YSWf64CPBASJu4Qjb6HuQgmulkK7zLhHQDnuEZa4opIiopZhJd8p23vqYOH0vRWszruQGA1rrXyZ7RGTjMSI6KR4ymOevHWF8VrYoZrBcwUE6mGZVHNzniVPv+ytFu2prvY/FaEbltO8ZNYfvM+52LOHLYrEYSTX1tCCvxg5hH6wiZA+gCatdptXUefGmPkuym2iwCKnzATVH6jlceW22Q6bERDQCeWiN02NAD071ppsYwryWLkwLjIELvpVmXiOd3JcbilIwGF8rwkQVJdbi4/YaM+kWSzBUAr4G7OhMDJMhWY8PuVjPa/VyKqjqd31/RcU3z3WnjizYH9//Z4yyWYSzUxsa1eTSOK7m9fCpAt6pFNO4WUX+0jtSxhWKfMvwzdefqf22/rH+t6FNb/d3l7uF+ntLdzdPS34lrAjAkf/5E8c30XrbVQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->




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
