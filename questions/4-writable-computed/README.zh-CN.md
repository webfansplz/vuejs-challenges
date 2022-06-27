<!--info-header-start--><h1>可写的计算属性 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMSlcbmNvbnN0IHBsdXNPbmUgPSBjb21wdXRlZCgoKSA9PiBjb3VudC52YWx1ZSArIDEpXG5cbi8qKlxuICogTWFrZSB0aGUgYHBsdXNPbmVgIGNhbiBiZSB3cml0dGVuLlxuICogU28gd2UnbGwgZ2V0IHRoZSByZXN1bHQgaXMgYHBsdXNPbmVgIHRvIGJlIDMsIGFuZCBgY291bnRgIHRvIGJlIDIuXG4qL1xuXG5wbHVzT25lLnZhbHVlKytcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD57eyBjb3VudCB9fTwvcD5cbiAgICA8cD57eyBwbHVzT25lIH19PC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你需要创建一个可写的计算属性 :

```ts
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * 确保 `plusOne` 可以被写入.
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2.
*/

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
