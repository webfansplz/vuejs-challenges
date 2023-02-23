<!--info-header-start--><h1>Tree Component <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNq1Vclu2zAQ/ZUpL5EBSUaSm2EHLdpLDwUCtLcwB1aiYyG2JFB0Fhj69w6pbaglSts4QBJplseZ9zijE/uS5+HTUbIVWxeRSnINhdTHHPYifdhwpgvObrjiaXLIM6XhBEpuoYStyg7AGWZyRty/lJRfM3xOZaqboHDpmM1xVVKUpYUGjc5vQgvYGGzv7mRcAI/ydQUXlxd+9aoTvZdouBXKQLf2aJfsYzStoElsU4M2qEu34V126cMg62oqizjGTiUI9OQO5UGJNO4V4JZAIchpoxDEX/r3TTv2oYOs4NrQHomtfZpEp5UJEt+mAxH+lw4D8W909NV1aJ1QtyHxfmH+rZfVWNghsAYtD/leaGktAGv3zq9ivMpmcOpbzRksbeR66SQynw2mYn4IUy3VVkTSDpodGip0oVWSPjhSU1OnUpN9V3Vq/sRym6TyVmV5sT6ZHmhUeeO9k4xPQQBxBkV2kHqHJ4f4A0EwwUCCx76EWhY61AV23y6ZQ3ZELts18xnJweRCB0ed7JENso9iaWr6LX1ItA/yJZcRyXxKTJpJaFNw43WbqV5/BNF0/fbmQqjmUI+7KnLmg7eAzQ3qgnQkGgOKXXbE+/WcqUfjFsVrGpEY1MWuwWcl8lwq3IK2eQ8rW4z4bXmb5i1E0eL2dM846yTxLJI2KcTrZKX16iMBKonvmldoiiFzx9klFkzN9aXirNnCPb+zB4i9Awz6KQS03gW9ADvE41hXc1jDgOkKKe5IlQSbLq5B3LBcB3hY0TjwMK68d2mhryV5HtOxj9bXse+f1XGMoRkd38W9/Vicg3v7Cfkw7qeu5Ji+M1fyr3S8ntGx75/V8fpMOiLueXQ0wOeeocZa1qu0+qZ4ZAHjJ+tFe4tFqLMfQke77+keP54/U5Hjsjc7n/NuR9Zd1jXRxmmtzSQOXU6YG309E23K4My2YZoxv6z8AxqTcC0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

For this challenge, you need to implement a tree component. Lets go.

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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=208%20-%20Tree%20Component" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A208+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
