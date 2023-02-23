<!--info-header-start--><h1>Dynamic css values <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUttq4zAQ/ZVBT04wdvbCwhYny9KF3TwUlhYKadUH2Zo0orIkpElbE/LvHdlNCX2wmduZOTNHB/E7hOp5j+JCNKmLJhAkpH1YSWf64CPBASJu4Qjb6HuQgmulkK7zLhHQDnuEZa4opIiopZhJd8p23vqYOH0vRWszruQGA1rrXyZ7RGTjMSI6KR4ymOevHWF8VrYoZrBcwUE6mGZVHNzniVPv+ytFu2prvY/FaEbltO8ZNYfvM+52LOHLYrEYSTX1tCCvxg5hH6wiZA+gCatdptXUefGmPkuym2iwCKnzATVH6jlceW22Q6bERDQCeWiN02NAD071ppsYwryWLkwLjIELvpVmXiOd3JcbilIwGF8rwkQVJdbi4/YaM+kWSzBUAr4G7OhMDJMhWY8PuVjPa/VyKqjqd31/RcU3z3WnjizYH9//Z4yyWYSzUxsa1eTSOK7m9fCpAt6pFNO4WUX+0jtSxhWKfMvwzdefqf22/rH+t6FNb/d3l7uF+ntLdzdPS34lrAjAkf/5E8c30XrbVQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


SFC `<style>` tags support linking CSS values to dynamic components.

Do you know what it is?. Lets try it 👇: 

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
/* Modify the code to bind the dynamic color */
p {
  color: red
}
</style>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=14%20-%20Dynamic%20css%20values" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A14+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
