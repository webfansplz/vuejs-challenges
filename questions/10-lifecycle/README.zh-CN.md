<!--info-header-start--><h1>生命周期钩子</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgcHJvdmlkZSB9IGZyb20gXCJ2dWVcIlxuaW1wb3J0IENoaWxkIGZyb20gXCIuL0NoaWxkLnZ1ZVwiXG5cbmNvbnN0IHZpc2libGUgPSByZWYodHJ1ZSlcbmNvbnN0IHRpbWVyID0gcmVmKG51bGwpXG5jb25zdCBjb3VudCA9IHJlZigwKVxucHJvdmlkZShcInRpbWVyXCIsIHRpbWVyKVxucHJvdmlkZShcImNvdW50XCIsIGNvdW50KVxuXG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gIHZpc2libGUudmFsdWUgPSAhdmlzaWJsZS52YWx1ZVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8Q2hpbGQgdi1pZj1cInZpc2libGVcIiAvPlxuICAgIDxwPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVcIj5cbiAgICAgICAgVG9nZ2xlIENoaWxkIENvbXBvbmVudFxuICAgICAgPC9idXR0b24+XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iLCJDaGlsZC52dWUiOiI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgb25Nb3VudGVkLCBpbmplY3QgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgdGltZXIgPSBpbmplY3QoXCJ0aW1lclwiKVxuY29uc3QgY291bnQgPSBpbmplY3QoXCJjb3VudFwiKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICB0aW1lci52YWx1ZSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY291bnQudmFsdWUrK1xuICB9LCAxMDAwKVxufSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIENoaWxkIENvbXBvbmVudDoge3sgY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你将使用 `组合式 API: 生命周期钩子` 来完成它. 
以下是你要实现的内容 👇: 

```ts
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

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
