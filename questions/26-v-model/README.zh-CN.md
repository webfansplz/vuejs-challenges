<!--info-header-start--><h1>实现简易版`v-model`指令 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY3VzdG9tIGRpcmVjdGl2ZVxuICogQ3JlYXRlIGEgdHdvLXdheSBiaW5kaW5nIG9uIGEgZm9ybSBpbnB1dCBlbGVtZW50XG4gKlxuKi9cbmNvbnN0IFZPaE1vZGVsID0ge1xuXG59XG5cbmNvbnN0IHZhbHVlID0gcmVmKFwiSGVsbG8gVnVlLmpzXCIpXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxpbnB1dCB2LW9oLW1vZGVsPVwidmFsdWVcIiB0eXBlPVwidGV4dFwiIC8+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,我们将尝试实现一个简单的`v-model`指令,让我们开始吧 👇: 

```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
