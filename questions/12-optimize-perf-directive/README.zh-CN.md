<!--info-header-start--><h1>优化性能的指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/> <img src="https://img.shields.io/badge/-%23Built--ins-999" alt="#Built-ins"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNptUsFO4zAQ/ZWRtQdXzbrlWrXV7orDIoHgwNEXk07BIhlbtpMCUf6dcZ1ADxwSyfZ7M/Pem0H89V71HYqN2MY6WJ8gYur8XpNtvQsJBgh4hBGOwbWgBWO10KSpdhQT1K6jBLuMketFvmf6DSUMvWmkXMBuD4MmKEDFlx0ul5rGCq7W68zYrkpf7siHhK1vTEI+AWyjN7S/M68INgFhjwHqF0PPuIFhmHqPI1fIuFzqgi4qYemAbyphTCpFVvilqC3MWdMfFsXUmH53yTYx6/uCHjCP94QVj1ABvnmsL5i9zbRiyES598m29gMfMByvbWC47XHGq9Xkd6EcO+JnR9ylMe+Siei6tAHq2icMi+Jc4DwCsfwTPHAVG1HKgNE1PX7bCzm2x8KfXyuYCrLLACP/x9x0ViS1+HFWLSq4CM4mBsYX1zUHOLnwmp9NfKf6ApPjzdtwCsZ7DmlXHJY/1j9PA2BOhkMtwq94F6brea14hc6LtZxqqr5Vv7BRlgjD/8e7WxWQo65RrrS+Xj1X7K4WU5ESk5yqLFRy//C8npMN/InxExsoCAY=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


`Vue.js` 提供了一个指令，以便只渲染一次元素和组件，并且跳过以后的更新。

你知道它是什么吗 ? 让我们试试👇:

```vue
<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span>使它从不更新: {{ count }}</span>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=12%20-%20%E4%BC%98%E5%8C%96%E6%80%A7%E8%83%BD%E7%9A%84%E6%8C%87%E4%BB%A4" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A12+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
