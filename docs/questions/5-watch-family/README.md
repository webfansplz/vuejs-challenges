<!--info-header-start--><h1>watch family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMClcblxuLyoqXG4gKiBDaGFsbGVuZ2VzIDE6IFdhdGNoIG9uY2VcbiAqIE1ha2Ugc3VyZSB0aGUgd2F0Y2ggY2FsbGJhY2sgb25seSB0cmlnZ2VyIG9uY2VcbiovXG53YXRjaChjb3VudCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIk9ubHkgdHJpZ2dlcmVkIG9uY2VcIilcbn0pXG5cbmNvdW50LnZhbHVlID0gMVxuc2V0VGltZW91dCgoKSA9PiBjb3VudC52YWx1ZSA9IDIpXG5cbi8qKlxuICogQ2hhbGxlbmdlcyAyOiBXYXRjaCBvYmplY3RcbiAqIE1ha2Ugc3VyZSB0aGUgd2F0Y2ggY2FsbGJhY2sgdHJpZ2dlcmVkXG4qL1xuY29uc3Qgc3RhdGUgPSByZWYoe1xuICBjb3VudDogMCxcbn0pXG5cbndhdGNoKHN0YXRlLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHN0YXRlLmNvdW50IHVwZGF0ZWRcIilcbn0pXG5cbnN0YXRlLnZhbHVlLmNvdW50ID0gMlxuXG4vKipcbiAqIENoYWxsZW5nZXMgMzogQ2FsbGJhY2sgRmx1c2ggVGltaW5nXG4gKiBNYWtlIHN1cmUgdmlzaXRlZCB0aGUgdXBkYXRlZCBlbGVSZWZcbiovXG5cbmNvbnN0IGVsZVJlZiA9IHJlZigpXG5jb25zdCBhZ2UgPSByZWYoMilcbndhdGNoKGFnZSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVSZWYudmFsdWUpXG59KVxuYWdlLnZhbHVlID0gMThcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgPC9wPlxuICAgIDxwIHJlZj1cImVsZVJlZlwiPlxuICAgICAge3sgYWdlIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: watch` to finish it. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * Challenges 1: Watch once
 * Make sure the watch callback only trigger once
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * Challenges 2: Watch object
 * Make sure the watch callback triggered
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * Challenges 3: Callback Flush Timing
 * Make sure visited the updated eleRef
*/

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
})
age.value = 18

</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=5%20-%20watch%20family" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A5+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
