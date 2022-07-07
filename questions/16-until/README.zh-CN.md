<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNkc9uwyAMxl/FyqVJWiWZepuSatuth70BF4TcDpUAAtNpqvruM6TZekL298N/Pt+qd++7a8LqtRqjCtoTRKTkwUh7njYUNwdh9exdILhBwBPc4RTcDKLiX6ISVljlbCRQLlmCKTP10OR837bCQgvH2RuckVX6QmBKGzglq0g7pto+s2u8yLW2mrQ0Ddy4wh8M5D6wvkqTsChZuy9P4KGDXXAo3O6hFkDGH6v+62irAsqI9aNBmb0rhXmDIafYhaMlDJysGZsOa+0ndrstPXbwMgx5ZQD5LTU9dihg05WZ90XNRjmDnXHnRV1bThPsG+h7+JQXhJgCFqtcIp8IdAQKbPayytgvd+K7cEDI5kpCjgBGD2/KaHWZRLWuKKoiARzXRAZ7z9mxf/pd3X8BOR2zCw==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


有些时候，我们需要依赖于异步的返回结果做一些后续处理，`until`函数在这种场景下非常有用，你能实现它吗 ? 让我们来试试吧 👇:


```vue
<script setup lang='ts'>
import { ref } from "vue"

const count = ref(0)

/**
 * 实现`until`函数
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
  console.log(count.value === 3) // 确保输出为true
}

</script>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=16%20-%20until" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A16+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
