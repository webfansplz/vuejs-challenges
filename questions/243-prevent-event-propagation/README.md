<!--info-header-start--><h1>prevent event propagation <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFjtEKgyAYRl/lw5vqpliXw2J7D2/CScRMJa2b6N2nuWSMoAtB/uPxPyt5GlMusyB3Qi2fBuNghZsNZKf6hhFnGWnZxFQ4XCvrwOXA3zc0yAs0LdZAgMC0FKXUfZ7FJ1kR0HZi19d2/WfTKualGOrEaGTnxD4B6GtY8Nhd3x0L8uJbj1Ne/3IfEWYYxSFU3jg+T3dapb1k+wCXbmrQ" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


In this challenge,you should make the click event's propagation to be stopped,let's go 👇: 


```vue
<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = () => {
  console.log('click2')
}

</script>

<template>
  <div @click="click1()">
   <div @click="click2()">
     click me
   </div>
  </div>
</template>
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=243%20-%20prevent%20event%20propagation" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A243+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
