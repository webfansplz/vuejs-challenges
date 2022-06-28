<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMClcblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhlIHVudGlsIGZ1bmN0aW9uXG4qL1xuXG5mdW5jdGlvbiB1bnRpbChpbml0aWFsKSB7XG4gIGZ1bmN0aW9uIHRvQmUodmFsdWUpIHtcblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b0JlLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluY3JlYXNlKCkge1xuICBjb3VudC52YWx1ZSA9IDBcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvdW50LnZhbHVlKytcbiAgfSwgMTAwMClcbiAgYXdhaXQgdW50aWwoY291bnQpLnRvQmUoMylcbiAgY29uc29sZS5sb2coY291bnQudmFsdWUgPT09IDMpIC8vIE1ha2Ugc3VyZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHAgQGNsaWNrPVwiaW5jcmVhc2VcIj5cbiAgICBJbmNyZWFzZVxuICA8L3A+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We always need to rely on the asynchronous return result to do something, and the `until` function is so useful in this case, Can you do it? Let's try it 👇:


```ts
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
  console.log(count.value === 3) // Make sure the output to be true
}

</script>

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
