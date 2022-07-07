<!--info-header-start--><h1>writable-computed <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdUj1v2zAQ/SsHTrKtUmiyBbLRj7no0AJdOJiWz6kQiSLIo5xA0H8PSZGJkiFDBgnk8d27e+9uYt+15qNDdsdq25hWE1gkp6GT6n4vGFnBDkK1vR4MwQQGLyU0Q68d4RlmuJihB8E8g2BCCdUMypIHOEWwD+ji6yZHdefsb4U+ngmKYgP7wwLno+wcwg5CglDVdisUbOGXfECg/wjHlH6Eq2lJnjrkEfBn8M+S4IrQSAX3SBFu0LqOVlk0wAnhtgSpznCMJXPwxjNtq1A1oZdedrsQqqvFF++CvxD2upOE/gZQn9sxHvxRH6Yp6Z7nutJv4ln560tdLbl1tWJkJcvafiaHOKElTtbP52UG/VIle//Nm+9ZLH1x1HZ+XqtxnTE0f8ISWioBHzU2q8yxDWnL4FLKv1Q/Q3iVFiShFKG5yAZfgH+fNMIUJCWRd6Bcf0ITQtGP18AcKHJLhWCZQ7ASlk2IRC35tw/m/g4eyoT1uhqpNRq/XtGgIrP7dQqgRXxRJBgfe5AWnHpQw1WF41rRhqeqG07DDyxuP0cS9SeKm0gx+3/42PwMIPYzbA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6IndyaXRhYmxlQ29tcHV0ZWQudGVzdC50cyIsImZpbGVzIjp7InBhY2thZ2UuanNvbiI6IntcInNjcmlwdHNcIjp7XCJ0ZXN0XCI6XCJ2aXRlc3QgLS1lbnZpcm9ubWVudCBqc2RvbSAtLXVpXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biB0ZXN0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlc3RcIjpcIl4wLjE3LjBcIixcInZ1ZVwiOlwiXjMuMi4zN1wiLFwidml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvclwiOlwiMS4wLjFcIixcIkB0eXBlcy9qc2RvbVwiOlwiXjE2LjIuMTRcIixcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOlwiXjIuMy4zXCIsXCJAdml0ZXN0L3VpXCI6XCJeMC4xNy4wXCIsXCJAdnVlL3Rlc3QtdXRpbHNcIjpcIl4yLjAuMlwiLFwianNkb21cIjpcIl4yMC4wLjBcIn19Iiwidml0ZXN0LmNvbmZpZy50cyI6IlxuICAgICAgICBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiXG4gICAgICAgIGltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICAgICAgICBwbHVnaW5zOiBbdnVlKCldLFxuICAgICAgICB9KVxuICAgICAgIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IGNvdW50ID0gcmVmKDEpXG5jb25zdCBwbHVzT25lID0gY29tcHV0ZWQoKCkgPT4gY291bnQudmFsdWUgKyAxKVxuXG4vKipcbiAqIE1ha2UgdGhlIGBwbHVzT25lYCB3cml0YWJsZS5cbiAqIFNvIHRoYXQgd2UgY2FuIGdldCB0aGUgcmVzdWx0IGBwbHVzT25lYCB0byBiZSAzLCBhbmQgYGNvdW50YCB0byBiZSAyLlxuKi9cblxucGx1c09uZS52YWx1ZSsrXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHA+e3sgY291bnQgfX08L3A+XG4gICAgPHA+e3sgcGx1c09uZSB9fTwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIiwid3JpdGFibGVDb21wdXRlZC50ZXN0LnRzIjoiaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiQHZ1ZS90ZXN0LXV0aWxzXCJcbmltcG9ydCB7IGRlc2NyaWJlLCBpdCwgZXhwZWN0IH0gZnJvbSBcInZpdGVzdFwiXG5cbmltcG9ydCBXcml0YWJsZSBmcm9tIFwiLi9BcHAudnVlXCJcblxuaW50ZXJmYWNlIFdyaXRhYmxlVHlwZSB7XG4gIHBsdXNPbmU6IG51bWJlclxuICBjb3VudDogbnVtYmVyXG59XG5cbmRlc2NyaWJlKFwiV3JpdGFibGVcIiwgKCkgPT4ge1xuICBpdChcIk1ha2UgdGhlIGBwbHVzT25lYCB3cml0YWJsZVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFdyaXRhYmxlKVxuICAgIGV4cGVjdCgod3JhcHBlci52bSBhcyB1bmtub3duIGFzIFdyaXRhYmxlVHlwZSkucGx1c09uZSkudG9CZSgzKVxuICAgIGV4cGVjdCgod3JhcHBlci52bSBhcyB1bmtub3duIGFzIFdyaXRhYmxlVHlwZSkuY291bnQpLnRvQmUoMilcbiAgfSlcbn0pXG4ifSwidGl0bGUiOiJ3cml0YWJsZS1jb21wdXRlZCIsImRlc2NyaXB0aW9uIjoid3JpdGFibGUtY29tcHV0ZWQiLCJ0ZW1wbGF0ZSI6Im5vZGUiLCJkZXBlbmRlbmNpZXMiOnsidHlwZXNjcmlwdCI6Il40LjcuNCIsInZpdGVzdCI6Il4wLjE3LjAiLCJ2dWUiOiJeMy4yLjM3IiwiQHR5cGVzL2pzZG9tIjoiXjE2LjIuMTQiLCJAdml0ZWpzL3BsdWdpbi12dWUiOiJeMi4zLjMiLCJAdml0ZXN0L3VpIjoiXjAuMTcuMCIsIkB2dWUvdGVzdC11dGlscyI6Il4yLjAuMiIsImpzZG9tIjoiXjIwLjAuMCJ9fQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge(Passed%20unit%20tests)-1389fd" alt="Take the Challenge(Passed unit tests)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you will need to create a writable computed ref : 

```vue
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * Make the `plusOne` writable.
 * So that we can get the result `plusOne` to be 3, and `count` to be 2.
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=4%20-%20writable-computed" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A4+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
