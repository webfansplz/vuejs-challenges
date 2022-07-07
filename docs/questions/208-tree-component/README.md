<!--info-header-start--><h1>Tree Component <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqlU8FugzAM/RUvl3YSFG1HRCtN2wf0sFvpAYFp0SCgxJ00If59SRiQtLBNGwcIz37PyXPcsqem2bxfkIUskqkoGgKJdGmgTPhpGzOSMdvFIuZF1dSCoAWBOXSQi7qCmClmzKzwq0B8rtWaI6chaRM4sC7Xk9KaSwJSwZeEEthq7fWh1SGAN/wIYfWw8vpfKqhEBewToaVHPD0XZaagEAbiSPXHpIlu0id258EN63GJZQXmqloKduVJ5SQSnl1twN2CLWFVm5Ww4p13HI5jFpNkLzemXpk44ssmOkdZMPF7O5TCf+3QEn+z47q7jq0L3R1MPN7rTxT0Y2GGwACEVVMmhAYBiNw7H2bqKuvB+brVMYPAZEaBQ2Qeu5mKn4eQE4o8SdEMmhkau9GSRMFPTqttaOrSwD70J9WvDPOC417UjYxafQY7q9utf2nGne9DVoOsK6SzqrxRD/j+rAPdJyt6b6Q=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

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
