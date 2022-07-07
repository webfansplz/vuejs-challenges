<!--info-header-start--><h1>Dynamic css values <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNUEFuhDAM/IqVE6AVUKmnFYvUYw/7gk0PLDEFKcRRErZCiL/XSVSpN3vsGc/4EB/W1q8NxVV0fnSLDeAxbLaXZlktuQAHOJzghMnRClLwrhTSjGR8gDDjinCLG4UUDpUUpTR/05E0Oc/jhxRPHXkXFthRa/rJdWLE4tshGim+Ipnvf5qA7jXooijh1sMhDeRbNYNbvJi1H/chzPWkiVyRSjcYRSuzKngvWe28wFvbtslU1+SAHI2bgKvVQ0DuADrbz9FW18TgXfNvyK0Pu0bwI1lUjDQV3Ekt0x4tsRGFEAiei1EJULsZ1mXMDqFqpLE5QAKu/CvFvpKdqMuC4vwFPjyGKQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
