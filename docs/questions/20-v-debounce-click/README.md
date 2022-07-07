<!--info-header-start--><h1>v-debounce-click <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVUT1rwzAQ/SsPLUkMsUPH4BRCu3Qo3Tp5sGNfHRFZUq1Tign575XkFArtkkWgd0/v43QRe2vzsyexFaVrR2kZjthbqEb3uwW7xWOlK11kWaWR4WWwigbSDD4SWu/YDOjkSC3LMyXKa3MiOD9SotRGPynZnmoMxEfTwWg1oSd24FH2PY0UsZbwdSSNNnIDMjR6AsuBHD59gNSUtPe6w2Q8GuUMNAUim+BlrRnnRB0djI9qHalmVoCxLI3OQXmP+rz+oayT13ZwdZSudFbEoq3RjvH+fCOl7NjhEmfXeHwEOOqF0Gm4XMUhEB8aRbky/bISb7HlnQXF6mZRFvNPpM2XTGHnDVO4AeXBMwfzPzUeNptdJW6ZKpHIwBw/8CX/v1KUxawYHpTFLytx/QaEuL/9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a debounced-click-directive. Lets go 👇: 

```vue
<script setup lang='ts'>

/**
  * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/

const VDebounceClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=20%20-%20v-debounce-click" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A20+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
