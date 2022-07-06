<!--info-header-start--><h1>Lifecycle Hooks <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Lifecycle-999" alt="#Lifecycle"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgcHJvdmlkZSB9IGZyb20gXCJ2dWVcIlxuaW1wb3J0IENoaWxkIGZyb20gXCIuL0NoaWxkLnZ1ZVwiXG5cbmNvbnN0IHZpc2libGUgPSByZWYodHJ1ZSlcbmNvbnN0IHRpbWVyID0gcmVmKG51bGwpXG5jb25zdCBjb3VudCA9IHJlZigwKVxucHJvdmlkZShcInRpbWVyXCIsIHRpbWVyKVxucHJvdmlkZShcImNvdW50XCIsIGNvdW50KVxuXG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gIHZpc2libGUudmFsdWUgPSAhdmlzaWJsZS52YWx1ZVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8Q2hpbGQgdi1pZj1cInZpc2libGVcIiAvPlxuICAgIDxwPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVcIj5cbiAgICAgICAgVG9nZ2xlIENoaWxkIENvbXBvbmVudFxuICAgICAgPC9idXR0b24+XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iLCJDaGlsZC52dWUiOiI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgb25Nb3VudGVkLCBpbmplY3QgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgdGltZXIgPSBpbmplY3QoXCJ0aW1lclwiKVxuY29uc3QgY291bnQgPSBpbmplY3QoXCJjb3VudFwiKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICB0aW1lci52YWx1ZSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY291bnQudmFsdWUrK1xuICB9LCAxMDAwKVxufSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIENoaWxkIENvbXBvbmVudDoge3sgY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use the `Composition API: Lifecycle Hooks` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // The timer will work abnormally when the child component is toggled. Lets fix it.
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=10%20-%20Lifecycle%20Hooks" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A10+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
