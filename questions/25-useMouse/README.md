<!--info-header-start--><h1>useMouse <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdUk2L2zAQ/SuDTg6octpjSEJb6KHQ3npoQRetMrsRsSVhjeMsxv+9IzvxOuzCwh78wcybN2/eTC++xajOLYqN2CbbuEiQkNoIlfFPOy0oabHXXvuyhJ91rLBGT6CU0v6x9ZZc8NAm/HHm8C+XCD02BZnmCUkC5qgEa6rqwdjTCvrMNLxP9zvwqxjx8Jq+c/4QOgla1BlXhzNqIYHxuz30w2psYYNPBD1cJDzDALsFrfbbcpp1nGxLyEoM4X7MQwzJjUJcAkMb6JkEhkHmH6YatuVcoL2QgtXgRREmUpTYR1fH0OTWrI6HG+CxCTWL/co2c2miTy25in3VfoYeMAt6QAku+3aJaBeVZ5fL7go8XuiPs6cFqGUX8jxXDC/2llLldcsT4Nas0OJmysK/bLkjzqVjaKsDdKE55bRJz94uMACTxV1jYsSGHR7nLbgVO5zz0xjFFaCOVFfFaqUofM+t3zZ7LWGtBRMsW8xr5iYeOxhLx5tgnrsbuCoD4AkR/d8NfF7L+9i/DXx5idnKMc09bootcfmm8ne6PHVwKRqyx0nCLGBWbTrjaF5RPriP2sGqWMVoyKQiP2L4D6F2QDo=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We should focus on reusability when using `Vue.js`. Composables are a great way to ensure this. Let's go 👇: 


```vue
<script setup lang="ts">

// Implement ...
function useEventListener(target, event, callback) {

}

// Implement ...
function useMouse() {
  useEventListener(window, "mousemove", () => {})
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>


```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=25%20-%20useMouse" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A25+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
