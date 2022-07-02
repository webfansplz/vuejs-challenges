<!--info-header-start--><h1>watch 全家桶 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnQgPSByZWYoMClcblxuLyoqXG4gKiBDaGFsbGVuZ2VzIDE6IFdhdGNoIG9uY2VcbiAqIE1ha2Ugc3VyZSB0aGUgd2F0Y2ggY2FsbGJhY2sgb25seSB0cmlnZ2VyIG9uY2VcbiovXG53YXRjaChjb3VudCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIk9ubHkgdHJpZ2dlcmVkIG9uY2VcIilcbn0pXG5cbmNvdW50LnZhbHVlID0gMVxuc2V0VGltZW91dCgoKSA9PiBjb3VudC52YWx1ZSA9IDIpXG5cbi8qKlxuICogQ2hhbGxlbmdlcyAyOiBXYXRjaCBvYmplY3RcbiAqIE1ha2Ugc3VyZSB0aGUgd2F0Y2ggY2FsbGJhY2sgdHJpZ2dlcmVkXG4qL1xuY29uc3Qgc3RhdGUgPSByZWYoe1xuICBjb3VudDogMCxcbn0pXG5cbndhdGNoKHN0YXRlLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHN0YXRlLmNvdW50IHVwZGF0ZWRcIilcbn0pXG5cbnN0YXRlLnZhbHVlLmNvdW50ID0gMlxuXG4vKipcbiAqIENoYWxsZW5nZXMgMzogQ2FsbGJhY2sgRmx1c2ggVGltaW5nXG4gKiBNYWtlIHN1cmUgdmlzaXRlZCB0aGUgdXBkYXRlZCBlbGVSZWZcbiovXG5cbmNvbnN0IGVsZVJlZiA9IHJlZigpXG5jb25zdCBhZ2UgPSByZWYoMilcbndhdGNoKGFnZSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVSZWYudmFsdWUpXG59KVxuYWdlLnZhbHVlID0gMThcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IGNvdW50IH19XG4gICAgPC9wPlxuICAgIDxwIHJlZj1cImVsZVJlZlwiPlxuICAgICAge3sgYWdlIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: watch` 来完成它。
以下是你要实现的内容 👇: 

```vue
<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * 挑战 1: Watch 一次
 * 确保副作用函数只执行一次
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * 挑战 2: Watch 对象
 * 确保副作用函数被正确触发
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * 挑战 3: 副作用函数刷新时机
 * 确保正确访问到更新后的`eleRef`值
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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=5%20-%20watch%20%E5%85%A8%E5%AE%B6%E6%A1%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A5+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
