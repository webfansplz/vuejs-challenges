<!--info-header-start--><h1>防抖点击指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdU01P20AQ/SsjX3CCcShH6qBCqdRWpRxatQeMFGNPnBX27nZ3nGCh/PfOfgTSD1Uqh8TxzJt5M29eHpNzrfP1gMlpUtjaCE1gkQYNXSXb+QHZg7NSlnI2nZYSpvCh1x32KAlohVAPllQPjTBYk1ijh1xV9wh2MOghCyXfdqK+X0CPtFINKNmN0CJZICPaFg26WI2wWaGE2mE50ldyBBI9WvgxcKgbfe9z2cCoBqg6q0AiA0kxl9bKhIkavFOD69ZgV4UOoDQJJXPAvIXF+mgHOfJcp71duNalnM7corWSluDbZQT52WEOjy63dV9LDrt+PLRPphOXBHCFqsO8U21aJtduy/9cMJlEimIWLuGVLwhZ84qQ3wCKu4GIyf9Y4+T4eF4mcaYy8WCAMD7jBf1dUihmoSMXFLM9qiRLhGzwISe0lJNlf4jey/wIPRMTbGFp+Phl8obtw6WWjgYSnS2TUj5BG3Sr3GHGE2SAD5qNksFaPFevhSvdK6JRI1deXl99N5XWaP7J9FTGPt7B8lk0dQBUdpQ1PN0tXiUcjyrDXjzdYyvef736dOE1eResfpZF2ebwKh57qQykHRIIDh6/5kcRMPzz8JDv6MSvNhXLHhjyyMrW8Pd6PvZOIc78ftQyyYDtNT8LpIIYY1dq6BrYKOPTfrc9TPAhgUE7dLyXZV7Z3tzymDe3z4BoVI6uRb6UacovO/B+M4iNcj3YlQPF1bbxGcg28U7z4IyU1f9Vgn3FIzhfsr14n+A+liODk1gUXJJ+/HL9OQ8jieWYhkEmk5zUhRPrpixf9jfjslsvf1jDfZLtTyyAvcA=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，我们将尝试实现一个防抖点击指令，让我们开始吧 👇:

```vue
<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
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

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=20%20-%20%E9%98%B2%E6%8A%96%E7%82%B9%E5%87%BB%E6%8C%87%E4%BB%A4" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A20+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
