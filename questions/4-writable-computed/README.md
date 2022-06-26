<!--info-header-start--><h1>writable-computed</h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMSlcbmNvbnN0IHBsdXNPbmUgPSBjb21wdXRlZCgoKSA9PiBjb3VudC52YWx1ZSArIDEpXG5cbi8qKlxuICogTWFrZSB0aGUgYHBsdXNPbmVgIGNhbiBiZSB3cml0dGVuLlxuICogU28gd2UnbGwgZ2V0IHRoZSByZXN1bHQgaXMgYHBsdXNPbmVgIHRvIGJlIDMsIGFuZCBgY291bnRgIHRvIGJlIDIuXG4qL1xuXG5wbHVzT25lLnZhbHVlKytcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD57eyBjb3VudCB9fTwvcD5cbiAgICA8cD57eyBwbHVzT25lIH19PC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you need to creating a writable computed ref : 

```ts
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * Make the `plusOne` can be written.
 * So we'll get the result is `plusOne` to be 3, and `count` to be 2.
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

Click the `Take the Challenge` button to start coding! Happy Hacking!
