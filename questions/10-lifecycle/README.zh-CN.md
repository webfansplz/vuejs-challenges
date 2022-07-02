<!--info-header-start--><h1>生命周期钩子 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Lifecycle-999" alt="#Lifecycle"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgcHJvdmlkZSB9IGZyb20gXCJ2dWVcIlxuaW1wb3J0IENoaWxkIGZyb20gXCIuL0NoaWxkLnZ1ZVwiXG5cbmNvbnN0IHZpc2libGUgPSByZWYodHJ1ZSlcbmNvbnN0IHRpbWVyID0gcmVmKG51bGwpXG5jb25zdCBjb3VudCA9IHJlZigwKVxucHJvdmlkZShcInRpbWVyXCIsIHRpbWVyKVxucHJvdmlkZShcImNvdW50XCIsIGNvdW50KVxuXG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gIHZpc2libGUudmFsdWUgPSAhdmlzaWJsZS52YWx1ZVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8Q2hpbGQgdi1pZj1cInZpc2libGVcIiAvPlxuICAgIDxwPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVcIj5cbiAgICAgICAgVG9nZ2xlIENoaWxkIENvbXBvbmVudFxuICAgICAgPC9idXR0b24+XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iLCJDaGlsZC52dWUiOiI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgb25Nb3VudGVkLCBpbmplY3QgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgdGltZXIgPSBpbmplY3QoXCJ0aW1lclwiKVxuY29uc3QgY291bnQgPSBpbmplY3QoXCJjb3VudFwiKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICB0aW1lci52YWx1ZSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY291bnQudmFsdWUrK1xuICB9LCAxMDAwKVxufSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIENoaWxkIENvbXBvbmVudDoge3sgY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `组合式 API: 生命周期钩子` 来完成它。
以下是你要实现的内容 👇: 

```vue
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // 切换子组件时, 定时器将不正常工作, 让我们来修复它 . 
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=10%20-%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A10+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
