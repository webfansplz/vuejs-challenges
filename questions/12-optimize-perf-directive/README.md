<!--info-header-start--><h1>Optimize performance directive <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/> <img src="https://img.shields.io/badge/-%23Built--ins-999" alt="#Built-ins"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudCA9IHJlZigwKVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvdW50LnZhbHVlKytcbn0sIDEwMDApXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8c3Bhbj5NYWtlIGl0IG5ldmVyIGNoYW5nZToge3sgY291bnQgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


`Vue.js` provides a directive so that render the element and component once only, and skip future updates.

Do you know what's it, Let's try it 👇: 

```ts
<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span>Make it never change: {{ count }}</span>
</template>

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
