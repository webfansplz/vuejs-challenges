<!--info-header-start--><h1>全局CSS <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUUFuwjAQ/MrKJ0AkoUhc0kBV0UPVqmrLoadcnGQhLo5tORsSivL32glIVQ+2tOOZ3Zn1hT0aE54aZDFLCCsjOeEmVQCJ2TyjlBq+Ggy/6yQyDk6iPxxX1nSWCHWuDRYDYuDixXutKKjFD8bLhenuPZRrqW1ssRgqwo4CLsVBxZCjIrQDLIXCoERxKCmG1Sjtfd9oBm/8iCAIWm2PMItSleniPI5rRUFlDHeLxakd+txaeKQckIznx4PVjSqC0QlkjZXnVmtvyM1IoiGMS8HmTKgCu5CwppBqtxpRGW0JLlBgnVuR4dw5mQN2BnOCHvZWV5Cyk/CSlHnHV4lb7463N0IYXdf9YHk78m4dJyl70tWH03CZsjlMprDejPEEuUeLjmqBNPjc/xhwtTIZx01D0lv3BVyoCSedOfl7VdTZ8qXMtqXIlrvV6+d6nbLp1Kt7d/vD+l/wtrJ4" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


有些时候，我们想在具有CSS作用域的`Vue`单文件组件设置全局CSS样式， 该怎么设置呢 ? 让我们开始吧 👇: 

```css
<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>

p {
  font-size:20px;
  color:red;
  text-align: center;
  line-height: 50px;
}

/* 使其工作 */
body {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=27%20-%20%E5%85%A8%E5%B1%80CSS" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A27+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
