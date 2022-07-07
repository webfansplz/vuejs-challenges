<!--info-header-start--><h1>可写的计算属性 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdUj1v2zAQ/SsHTrKtUmiyBbLRj7no0AJdOJiWz6kQiSLIo5xA0H8PSZGJkiFDBgnk8d27e+9uYt+15qNDdsdq25hWE1gkp6GT6n4vGFnBDkK1vR4MwQQGLyU0Q68d4RlmuJihB8E8g2BCCdUMypIHOEWwD+ji6yZHdefsb4U+ngmKYgP7wwLno+wcwg5CglDVdisUbOGXfECg/wjHlH6Eq2lJnjrkEfBn8M+S4IrQSAX3SBFu0LqOVlk0wAnhtgSpznCMJXPwxjNtq1A1oZdedrsQqqvFF++CvxD2upOE/gZQn9sxHvxRH6Yp6Z7nutJv4ln560tdLbl1tWJkJcvafiaHOKElTtbP52UG/VIle//Nm+9ZLH1x1HZ+XqtxnTE0f8ISWioBHzU2q8yxDWnL4FLKv1Q/Q3iVFiShFKG5yAZfgH+fNMIUJCWRd6Bcf0ITQtGP18AcKHJLhWCZQ7ASlk2IRC35tw/m/g4eyoT1uhqpNRq/XtGgIrP7dQqgRXxRJBgfe5AWnHpQw1WF41rRhqeqG07DDyxuP0cS9SeKm0gx+3/42PwMIPYzbA==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6IndyaXRhYmxlQ29tcHV0ZWQudGVzdC50cyIsImZpbGVzIjp7InBhY2thZ2UuanNvbiI6IntcInNjcmlwdHNcIjp7XCJ0ZXN0XCI6XCJ2aXRlc3QgLS1lbnZpcm9ubWVudCBqc2RvbSAtLXVpXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biB0ZXN0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlc3RcIjpcIl4wLjE3LjBcIixcInZ1ZVwiOlwiXjMuMi4zN1wiLFwidml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvclwiOlwiMS4wLjFcIixcIkB0eXBlcy9qc2RvbVwiOlwiXjE2LjIuMTRcIixcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOlwiXjIuMy4zXCIsXCJAdml0ZXN0L3VpXCI6XCJeMC4xNy4wXCIsXCJAdnVlL3Rlc3QtdXRpbHNcIjpcIl4yLjAuMlwiLFwianNkb21cIjpcIl4yMC4wLjBcIn19Iiwidml0ZXN0LmNvbmZpZy50cyI6IlxuICAgICAgICBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiXG4gICAgICAgIGltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICAgICAgICBwbHVnaW5zOiBbdnVlKCldLFxuICAgICAgICB9KVxuICAgICAgIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IGNvdW50ID0gcmVmKDEpXG5jb25zdCBwbHVzT25lID0gY29tcHV0ZWQoKCkgPT4gY291bnQudmFsdWUgKyAxKVxuXG4vKipcbiAqIE1ha2UgdGhlIGBwbHVzT25lYCB3cml0YWJsZS5cbiAqIFNvIHRoYXQgd2UgY2FuIGdldCB0aGUgcmVzdWx0IGBwbHVzT25lYCB0byBiZSAzLCBhbmQgYGNvdW50YCB0byBiZSAyLlxuKi9cblxucGx1c09uZS52YWx1ZSsrXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHA+e3sgY291bnQgfX08L3A+XG4gICAgPHA+e3sgcGx1c09uZSB9fTwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIiwid3JpdGFibGVDb21wdXRlZC50ZXN0LnRzIjoiaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiQHZ1ZS90ZXN0LXV0aWxzXCJcbmltcG9ydCB7IGRlc2NyaWJlLCBpdCwgZXhwZWN0IH0gZnJvbSBcInZpdGVzdFwiXG5cbmltcG9ydCBXcml0YWJsZSBmcm9tIFwiLi9BcHAudnVlXCJcblxuaW50ZXJmYWNlIFdyaXRhYmxlVHlwZSB7XG4gIHBsdXNPbmU6IG51bWJlclxuICBjb3VudDogbnVtYmVyXG59XG5cbmRlc2NyaWJlKFwiV3JpdGFibGVcIiwgKCkgPT4ge1xuICBpdChcIk1ha2UgdGhlIGBwbHVzT25lYCB3cml0YWJsZVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFdyaXRhYmxlKVxuICAgIGV4cGVjdCgod3JhcHBlci52bSBhcyB1bmtub3duIGFzIFdyaXRhYmxlVHlwZSkucGx1c09uZSkudG9CZSgzKVxuICAgIGV4cGVjdCgod3JhcHBlci52bSBhcyB1bmtub3duIGFzIFdyaXRhYmxlVHlwZSkuY291bnQpLnRvQmUoMilcbiAgfSlcbn0pXG4ifSwidGl0bGUiOiLlj6/lhpnnmoTorqHnrpflsZ7mgKciLCJkZXNjcmlwdGlvbiI6IuWPr+WGmeeahOiuoeeul+WxnuaApyIsInRlbXBsYXRlIjoibm9kZSIsImRlcGVuZGVuY2llcyI6eyJ0eXBlc2NyaXB0IjoiXjQuNy40Iiwidml0ZXN0IjoiXjAuMTcuMCIsInZ1ZSI6Il4zLjIuMzciLCJAdHlwZXMvanNkb20iOiJeMTYuMi4xNCIsIkB2aXRlanMvcGx1Z2luLXZ1ZSI6Il4yLjMuMyIsIkB2aXRlc3QvdWkiOiJeMC4xNy4wIiwiQHZ1ZS90ZXN0LXV0aWxzIjoiXjIuMC4yIiwianNkb20iOiJeMjAuMC4wIn19" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98(%E9%80%9A%E8%BF%87%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)-1389fd" alt="接受挑战(通过单元测试)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你需要创建一个可写的计算属性 :

```vue
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
*/

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=4%20-%20%E5%8F%AF%E5%86%99%E7%9A%84%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A4+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
