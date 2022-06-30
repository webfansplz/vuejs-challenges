<!--info-header-start--><h1>v-model <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY3VzdG9tIGRpcmVjdGl2ZVxuICogQ3JlYXRlIGEgdHdvLXdheSBiaW5kaW5nIG9uIGEgZm9ybSBpbnB1dCBlbGVtZW50XG4gKlxuKi9cbmNvbnN0IFZPaE1vZGVsID0ge1xuXG59XG5cbmNvbnN0IHZhbHVlID0gcmVmKFwiSGVsbG8gVnVlLmpzXCIpXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxpbnB1dCB2LW9oLW1vZGVsPVwidmFsdWVcIiB0eXBlPVwidGV4dFwiIC8+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a simple `v-model` directive, let's go 👇: 

```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the custom directive
 * Create a two-way binding on a form input element
 *
*/
const VOhModel = {

}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
</template>

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
