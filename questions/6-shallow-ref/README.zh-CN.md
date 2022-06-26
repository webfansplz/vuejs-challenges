<!--info-header-start--><h1>浅层 ref</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHNoYWxsb3dSZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IHN0YXRlID0gc2hhbGxvd1JlZih7IGNvdW50OiAxIH0pXG5cbi8vIERvZXMgTk9UIHRyaWdnZXJcbndhdGNoKHN0YXRlLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU3RhdGUuY291bnQgVXBkYXRlZFwiKVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgd2F0Y2ggY2FsbGJhY2sgdHJpZ2dlci5cbiovXG5zdGF0ZS52YWx1ZS5jb3VudCA9IDJcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IHN0YXRlLmNvdW50IH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,你将使用 `响应式 API: shallowRef` 来完成它. 
以下是你要实现的内容 👇: 

```ts
<script setup lang="ts">
import { shallowRef, watch } from "vue"

const state = shallowRef({ count: 1 })

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * 修改以下代码使watch回调被触发
 *
*/
state.value.count = 2

</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
