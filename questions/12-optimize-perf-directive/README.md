<!--info-header-start--><h1>Optimize performance directive <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/> <img src="https://img.shields.io/badge/-%23Built--ins-999" alt="#Built-ins"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNptUsFO4zAQ/ZWRtQdXzbrlWrXV7orDIoHgwNEXk07BIhlbtpMCUf6dcZ1ADxwSyfZ7M/Pem0H89V71HYqN2MY6WJ8gYur8XpNtvQsJBgh4hBGOwbWgBWO10KSpdhQT1K6jBLuMketFvmf6DSUMvWmkXMBuD4MmKEDFlx0ul5rGCq7W68zYrkpf7siHhK1vTEI+AWyjN7S/M68INgFhjwHqF0PPuIFhmHqPI1fIuFzqgi4qYemAbyphTCpFVvilqC3MWdMfFsXUmH53yTYx6/uCHjCP94QVj1ABvnmsL5i9zbRiyES598m29gMfMByvbWC47XHGq9Xkd6EcO+JnR9ylMe+Siei6tAHq2icMi+Jc4DwCsfwTPHAVG1HKgNE1PX7bCzm2x8KfXyuYCrLLACP/x9x0ViS1+HFWLSq4CM4mBsYX1zUHOLnwmp9NfKf6ApPjzdtwCsZ7DmlXHJY/1j9PA2BOhkMtwq94F6brea14hc6LtZxqqr5Vv7BRlgjD/8e7WxWQo65RrrS+Xj1X7K4WU5ESk5yqLFRy//C8npMN/InxExsoCAY=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


`Vue.js` provides a directive that renders the element and the component only once, and skips future updates.

Do you know what the directive is?. Lets try it 👇: 

```vue
<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span>Make it not to change: {{ count }}</span>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=12%20-%20Optimize%20performance%20directive" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A12+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
