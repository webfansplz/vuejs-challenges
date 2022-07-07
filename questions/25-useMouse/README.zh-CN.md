<!--info-header-start--><h1>鼠标坐标 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFj8FqxDAMRH9l8GkXTHJfkkAPPRTaP/DFddXFNJFNrGRbjP+9jgul0MNehJBGTzNZPcTY7RupixqSW30UJJItYrZ8HY2SZNRk2HDf42mJMy3Egq7rDL9v7MQHxpboca/jZ5+EmNaT2PVKokHHVMPZeX617uOMfJDKfdxLqOXU9PiPv3l+CzcNo5ZDt4SdjNKo+nFCLuf2wgVOgoxPjS8UjH+whof+J2tLNghVJ1ZoanvEkHwz4hOsXJArBKXoo6moMvS/B4ZV+QYVUnIE" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在使用`Vue.js`时，我们应该关注可复用性，可组合函数是一个很好的方式，让我们开始吧 👇: 


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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=25%20-%20%E9%BC%A0%E6%A0%87%E5%9D%90%E6%A0%87" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A25+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
