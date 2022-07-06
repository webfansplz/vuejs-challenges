<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNkc9uwyAMxl/FyqVJWiWZepuSatuth70BF4TcDpUAAtNpqvruM6TZekL298N/Pt+qd++7a8LqtRqjCtoTRKTkwUh7njYUNwdh9exdILhBwBPc4RTcDKLiX6ISVljlbCRQLlmCKTP10OR837bCQgvH2RuckVX6QmBKGzglq0g7pto+s2u8yLW2mrQ0Ddy4wh8M5D6wvkqTsChZuy9P4KGDXXAo3O6hFkDGH6v+62irAsqI9aNBmb0rhXmDIafYhaMlDJysGZsOa+0ndrstPXbwMgx5ZQD5LTU9dihg05WZ90XNRjmDnXHnRV1bThPsG+h7+JQXhJgCFqtcIp8IdAQKbPayytgvd+K7cEDI5kpCjgBGD2/KaHWZRLWuKKoiARzXRAZ7z9mxf/pd3X8BOR2zCw==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We always need to rely on the asynchronous return result in order to do something, and the `until` function is so useful in this scenario. Can you do it? Lets try it 👇:


```vue
<script setup lang='ts'>
import { ref } from "vue"

const count = ref(0)

/**
 * Implement the until function
*/

function until(initial) {
  function toBe(value) {

  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=16%20-%20until" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A16+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
