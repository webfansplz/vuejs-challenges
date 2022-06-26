<!--info-header-start--><h1>shallow ref</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHNoYWxsb3dSZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IHN0YXRlID0gc2hhbGxvd1JlZih7IGNvdW50OiAxIH0pXG5cbi8vIERvZXMgTk9UIHRyaWdnZXJcbndhdGNoKHN0YXRlLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiU3RhdGUuY291bnQgVXBkYXRlZFwiKVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb2RlIHNvIHRoYXQgbWFrZSB0aGUgd2F0Y2ggY2FsbGJhY2sgdHJpZ2dlci5cbiovXG5zdGF0ZS52YWx1ZS5jb3VudCA9IDJcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IHN0YXRlLmNvdW50IH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: shallowRef` to finished it. 
Here's what you need to implement 👇: 

```ts
<script setup lang="ts">
import { shallowRef, watch } from "vue"

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * Modify the code so that make the watch callback trigger.
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

Click the `Take the Challenge` button to start coding! Happy Hacking!
