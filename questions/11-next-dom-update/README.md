<!--info-header-start--><h1>Next DOM update flush <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Global%20API%3AGeneral-999" alt="#Global API:General"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudCA9IHJlZigwKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIGNvdW50LnZhbHVlKytcblxuICAvKipcbiAgICogRE9NIG5vdCB5ZXQgdXBkYXRlZCwgaG93IHRvIG1ha2Ugc3VyZSB0aGUgRE9NIHVkcGF0ZWRcbiAgICogTWFrZSB0aGUgb3V0cHV0IHRvIGJlIHRydWVcbiAgKi9cblxuICBjb25zb2xlLmxvZygrZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpLnRleHRDb250ZW50ID09PSAxKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiBpZD1cImNvdW50ZXJcIiBAY2xpY2s9XCJpbmNyZW1lbnRcIj5cbiAgICB7eyBjb3VudCB9fVxuICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


When you mutate a reactive state in `Vue.js`, the resulting DOM updates are not applied synchronously. 

`Vue.js` provides a utility for waiting for the next DOM update flush. Lets Go 👇: 

```vue
<script setup>
import { ref } from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM is not yet updated, how to can we make sure that the DOM gets updated
   * Make the output be true
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=11%20-%20Next%20DOM%20update%20flush" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A11+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
