<!--info-header-start--><h1>树组件 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNq1Vclu2zAQ/ZUpL5EBSUaSm2EHLdpLDwUCtLcwB1aiYyG2JFB0Fhj69w6pbaglSts4QBJplseZ9zijE/uS5+HTUbIVWxeRSnINhdTHHPYifdhwpgvObrjiaXLIM6XhBEpuoYStyg7AGWZyRty/lJRfM3xOZaqboHDpmM1xVVKUpYUGjc5vQgvYGGzv7mRcAI/ydQUXlxd+9aoTvZdouBXKQLf2aJfsYzStoElsU4M2qEu34V126cMg62oqizjGTiUI9OQO5UGJNO4V4JZAIchpoxDEX/r3TTv2oYOs4NrQHomtfZpEp5UJEt+mAxH+lw4D8W909NV1aJ1QtyHxfmH+rZfVWNghsAYtD/leaGktAGv3zq9ivMpmcOpbzRksbeR66SQynw2mYn4IUy3VVkTSDpodGip0oVWSPjhSU1OnUpN9V3Vq/sRym6TyVmV5sT6ZHmhUeeO9k4xPQQBxBkV2kHqHJ4f4A0EwwUCCx76EWhY61AV23y6ZQ3ZELts18xnJweRCB0ed7JENso9iaWr6LX1ItA/yJZcRyXxKTJpJaFNw43WbqV5/BNF0/fbmQqjmUI+7KnLmg7eAzQ3qgnQkGgOKXXbE+/WcqUfjFsVrGpEY1MWuwWcl8lwq3IK2eQ8rW4z4bXmb5i1E0eL2dM846yTxLJI2KcTrZKX16iMBKonvmldoiiFzx9klFkzN9aXirNnCPb+zB4i9Awz6KQS03gW9ADvE41hXc1jDgOkKKe5IlQSbLq5B3LBcB3hY0TjwMK68d2mhryV5HtOxj9bXse+f1XGMoRkd38W9/Vicg3v7Cfkw7qeu5Ji+M1fyr3S8ntGx75/V8fpMOiLueXQ0wOeeocZa1qu0+qZ4ZAHjJ+tFe4tFqLMfQke77+keP54/U5Hjsjc7n/NuR9Zd1jXRxmmtzSQOXU6YG309E23K4My2YZoxv6z8AxqTcC0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你需要实现一个树组件，让我们开始吧。

```vue
<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{data: TreeData[]}>()
</script>

<template>
  <!-- do something.... -->
</template>
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=208%20-%20%E6%A0%91%E7%BB%84%E4%BB%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A208+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
