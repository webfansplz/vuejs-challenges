<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMClcblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhlIHVudGlsIGZ1bmN0aW9uXG4qL1xuXG5mdW5jdGlvbiB1bnRpbChpbml0aWFsKSB7XG4gIGZ1bmN0aW9uIHRvQmUodmFsdWUpIHtcblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b0JlLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluY3JlYXNlKCkge1xuICBjb3VudC52YWx1ZSA9IDBcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvdW50LnZhbHVlKytcbiAgfSwgMTAwMClcbiAgYXdhaXQgdW50aWwoY291bnQpLnRvQmUoMylcbiAgY29uc29sZS5sb2coY291bnQudmFsdWUgPT09IDMpIC8vIE1ha2Ugc3VyZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHAgQGNsaWNrPVwiaW5jcmVhc2VcIj5cbiAgICBJbmNyZWFzZVxuICA8L3A+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


有些时候,我们需要依赖于异步的返回结果做一些后续处理,`until`函数在这种场景下非常有用,你能实现它吗 ? 让我们来试试吧 👇:


```ts
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
