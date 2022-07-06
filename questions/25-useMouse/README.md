<!--info-header-start--><h1>useMouse <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFj8FqxDAMRH9l8GkXTHJfkkAPPRTaP/DFddXFNJFNrGRbjP+9jgul0MNehJBGTzNZPcTY7RupixqSW30UJJItYrZ8HY2SZNRk2HDf42mJMy3Egq7rDL9v7MQHxpboca/jZ5+EmNaT2PVKokHHVMPZeX617uOMfJDKfdxLqOXU9PiPv3l+CzcNo5ZDt4SdjNKo+nFCLuf2wgVOgoxPjS8UjH+whof+J2tLNghVJ1ZoanvEkHwz4hOsXJArBKXoo6moMvS/B4ZV+QYVUnIE" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
