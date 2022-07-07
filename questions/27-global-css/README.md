<!--info-header-start--><h1>Global CSS <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23CSS%20Features-999" alt="#CSS Features"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNjz3PgjAQx7/KhdEEy/MkLrUxcXNxdXIBekKl9ppyiGj87tISE8f75f5vr2zv/fo+YCYzxXjztmTcnR2A8rsDWktwGnB97ZXwM1bi52c+e54sQl+TR52Ih1cUX8hx3psnyv/CP7YR1WQpyIA6XYwPzktrGiehRscYErbGYd6iaVqWsFmk7+grVnAsOwTDMFLoYCXOriI9LXGj0dxK+CuK+5h8vhaRtIlUZd01gQan86UJVEOw00gUC80ZSqQx84rs/QE4hmAY" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
