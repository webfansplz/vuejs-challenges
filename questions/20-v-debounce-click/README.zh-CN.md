<!--info-header-start--><h1>节流点击指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVUT1rwzAQ/SsPLUkMsUPH4BRCu3Qo3Tp5sGNfHRFZUq1Tign575XkFArtkkWgd0/v43QRe2vzsyexFaVrR2kZjthbqEb3uwW7xWOlK11kWaWR4WWwigbSDD4SWu/YDOjkSC3LMyXKa3MiOD9SotRGPynZnmoMxEfTwWg1oSd24FH2PY0UsZbwdSSNNnIDMjR6AsuBHD59gNSUtPe6w2Q8GuUMNAUim+BlrRnnRB0djI9qHalmVoCxLI3OQXmP+rz+oayT13ZwdZSudFbEoq3RjvH+fCOl7NjhEmfXeHwEOOqF0Gm4XMUhEB8aRbky/bISb7HlnQXF6mZRFvNPpM2XTGHnDVO4AeXBMwfzPzUeNptdJW6ZKpHIwBw/8CX/v1KUxawYHpTFLytx/QaEuL/9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，我们将尝试实现一个节流点击指令，让我们开始吧 👇:

```vue
<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持节流延迟时间选项, 用法如 `v-debounce-click:ms`
 *
*/

const VDebounceClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>

```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=20%20-%20%E8%8A%82%E6%B5%81%E7%82%B9%E5%87%BB%E6%8C%87%E4%BB%A4" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A20+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
