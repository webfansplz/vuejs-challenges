<!--info-header-start--><h1>阻止事件冒泡 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFUsFu4yAQ/ZURl2IpJWqOlVO1e9zD7mGPIQevM3FRMSAYO62i/PsOwXajVaUeMHjmveHNPM7iJQQ1DigeRZ3aaAJBQhoC2MZ1Wy0oafGko3Z5td4lgtaa9u0BtiAr2D7BOWcAcs5bVNZ38q5A7qqcunzB3nzP3vzHrtdF3iKmJuyDbQivEYD6YEZ4vnJZd1Egq0k9fJnf3OZZRI5BjzNhzYy5+HKu18u9YiWMO+C7IkykKPEMTR98JDhD7wdHcIFj9D1o8cwjZmKi+4GM5Zlqt0APmDv7iyswtAJ8D9jyPppP9mgyNZMWGts2Z9V68rAA5nJSixBxREf35RuiD03XkPFOi9Uyf+7OEIPTqx/sAU4+vuV0kz5ce4MpHhFETIOlR0gUjet2e3Zyt/8ETCZydDTq6KTknxl8WwymQioM6TWDqhK/8H573Sk2IWDketeJSm51QTSnxiwIdWQvXqzlTtgqLardw17xtV2HkWNXbzlamGXI8uef379U0WaOH7IoqipF/kce307r+aHk036iZ4l5ics/+VcWJQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你需要阻止点击事件的冒泡，让我们开始吧。

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


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=243%20-%20%E9%98%BB%E6%AD%A2%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A243+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
