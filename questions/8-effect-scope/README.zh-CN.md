<!--info-header-start--><h1>Effect作用域 API</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCB3YXRjaEVmZmVjdCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudGVyID0gcmVmKDEpXG5jb25zdCBkb3VibGVkID0gY29tcHV0ZWQoKCkgPT4gY291bnRlci52YWx1ZSAqIDIpXG5cbi8vIHVzZSBgZWZmZWN0U2NvcGVgIEFQSSB0byBtYWtlIHRoZXNlIGVmZmVjdCBzdG9wIHRvZ2V0aGVyIGFmdGVyIHRyaWdnZXJlZCBvbmNlXG5cbndhdGNoKGRvdWJsZWQsICgpID0+IGNvbnNvbGUubG9nKGRvdWJsZWQudmFsdWUpKVxud2F0Y2hFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coXCJDb3VudDogXCIsIGRvdWJsZWQudmFsdWUpKVxuXG5jb3VudGVyLnZhbHVlID0gMlxuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY291bnRlci52YWx1ZSA9IDRcbn0pXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHA+XG4gICAgICB7eyBkb3VibGVkIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你将使用 `响应式 API: effectScope` 来完成它. 
以下是你要实现的内容 👇: 

```ts
<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 `effectScope` API 使这些Effect效果在触发一次后停止

watch(doubled, () => console.log(doubled.value))
watchEffect(() => console.log("Count: ", doubled.value))

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>


```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
