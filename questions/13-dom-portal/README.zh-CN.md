<!--info-header-start--><h1>DOM传送门 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/> <img src="https://img.shields.io/badge/-%23Built--ins-999" alt="#Built-ins"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cblxuY29uc3QgbXNnID0gXCJIZWxsbyBXb3JsZFwiXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDwhLS0gUmVuZGVycyBpdHMgdG8gYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBgYm9keWAgLS0+XG4gIDxzcGFuPnt7IG1zZyB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


`Vue.js`提供了一个内置组件,将其插槽内容渲染到另一个DOM,成为该DOM的一部分。

你知道它是什么吗 ? 让我们试试👇:

```ts
<script setup>

const msg = "Hello World"

</script>

<template>
  <!-- 将以下元素渲染成`body`的子元素 -->
  <span>{{ msg }}</span>
</template>


```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=13%20-%20DOM%E4%BC%A0%E9%80%81%E9%97%A8" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A13+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
