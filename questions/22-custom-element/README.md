<!--info-header-start--><h1>custom element <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Web%20Components-999" alt="#Web Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdkMFOwzAQRH9l8KVtJJI7clKBhNQiekOcfImSbZqS2Fa8LkJR/p1NghDiuOsZv9kZ1aP36S2SelA6VEPrGYE4enSlbfINh01hrLFt793AGOHsyUXLVGPCeXA9jBK3UbMoSxJjkeDY+456sgy+ECpXE9ihGqhkQokqBhYjrZp0sZzKDxGJ2kX2keHO8GVDCBf3KYgDdZ3De6T0GowSS5IZWzkbeF6+BOQi2u/3a47fjNvtDnmBURCoXRUXXkP8vKKfvo711qjSe6N2d2lrLQ2Ht9Pr8puWs+6vAT2FIElyY/7FkLnQ2aoqZvC0m+E6W2tcatNM0oWcLROg6/aGts5/kOKWhbzo7I9MTd+Fm4nR" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


Have you heard about `Web Components` ? 

Vue has excellent support for both creating and consuming custom elements. 

For this challenge, you can try it out. Lets go 👇: 

```vue
<script setup lang='ts'>

import { onMounted } from "vue"

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=22%20-%20custom%20element" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A22+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
