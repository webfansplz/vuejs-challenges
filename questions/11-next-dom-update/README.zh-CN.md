<!--info-header-start--><h1>下一次DOM更新 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Global%20API%3AGeneral-999" alt="#Global API:General"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudCA9IHJlZigwKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIGNvdW50LnZhbHVlKytcblxuICAvKipcbiAgICogRE9NIG5vdCB5ZXQgdXBkYXRlZCwgaG93IHRvIG1ha2Ugc3VyZSB0aGUgRE9NIHVkcGF0ZWRcbiAgICogTWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbiAgKi9cblxuICBjb25zb2xlLmxvZygrZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpLnRleHRDb250ZW50ID09PSAxKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiBpZD1cImNvdW50ZXJcIiBAY2xpY2s9XCJpbmNyZW1lbnRcIj5cbiAgICB7eyBjb3VudCB9fVxuICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在`Vue.js`中改变响应式状态时,DOM不会同步更新.   
`Vue.js` 提供了一个用于等待下一次DOM更新的方法,让我们开始吧 👇: 

```ts
<script setup>
import { ref } from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM还未更新,如何确保DOM已经更新 ?
   * 请保证以下输出为true
  */

  console.log(+document.getElementById("counter").textContent === 1)
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
