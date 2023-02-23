<!--info-header-start--><h1>Global CSS <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUUFuwjAQ/MrKJ0AkoUhc0kBV0UPVqmrLoadcnGQhLo5tORsSivL32glIVQ+2tOOZ3Zn1hT0aE54aZDFLCCsjOeEmVQCJ2TyjlBq+Ggy/6yQyDk6iPxxX1nSWCHWuDRYDYuDixXutKKjFD8bLhenuPZRrqW1ssRgqwo4CLsVBxZCjIrQDLIXCoERxKCmG1Sjtfd9oBm/8iCAIWm2PMItSleniPI5rRUFlDHeLxakd+txaeKQckIznx4PVjSqC0QlkjZXnVmtvyM1IoiGMS8HmTKgCu5CwppBqtxpRGW0JLlBgnVuR4dw5mQN2BnOCHvZWV5Cyk/CSlHnHV4lb7463N0IYXdf9YHk78m4dJyl70tWH03CZsjlMprDejPEEuUeLjmqBNPjc/xhwtTIZx01D0lv3BVyoCSedOfl7VdTZ8qXMtqXIlrvV6+d6nbLp1Kt7d/vD+l/wtrJ4" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


Sometimes, we may want to set global CSS in the scoped component. Do you know how to solve it?. Lets go 👇: 

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

/* Make it work */
body {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=27%20-%20Global%20CSS" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A27+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
