<!--info-header-start--><h1>effectScope API <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCB3YXRjaEVmZmVjdCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBjb3VudGVyID0gcmVmKDEpXG5jb25zdCBkb3VibGVkID0gY29tcHV0ZWQoKCkgPT4gY291bnRlci52YWx1ZSAqIDIpXG5cbi8vIHVzZSBgZWZmZWN0U2NvcGVgIEFQSSB0byBtYWtlIHRoZXNlIGVmZmVjdCBzdG9wIHRvZ2V0aGVyIGFmdGVyIHRyaWdnZXJlZCBvbmNlXG5cbndhdGNoKGRvdWJsZWQsICgpID0+IGNvbnNvbGUubG9nKGRvdWJsZWQudmFsdWUpKVxud2F0Y2hFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coXCJDb3VudDogXCIsIGRvdWJsZWQudmFsdWUpKVxuXG5jb3VudGVyLnZhbHVlID0gMlxuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY291bnRlci52YWx1ZSA9IDRcbn0pXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHA+XG4gICAgICB7eyBkb3VibGVkIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: effectScope` to finish it. 
Here's what you need to implement 👇: 

```ts
<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use `effectScope` API to make these effect stop together after triggered once

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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=8%20-%20effectScope%20API" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A8+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
