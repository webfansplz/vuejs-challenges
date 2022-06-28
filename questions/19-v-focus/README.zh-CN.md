<!--info-header-start--><h1>焦点自定义指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCJcblxuY29uc3Qgc3RhdGUgPSByZWYoZmFsc2UpXG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBjdXN0b20gZGlyZWN0aXZlXG4gKiBNYWtlIHN1cmUgdGhlIGlucHV0IGVsZW1lbnQgd2lsbCBmb2N1cy9ibHVyIHdoZW4gdG9nZ2xlIGBzdGF0ZWAgYXV0b21hdGljYWxseVxuICpcbiovXG5cbmNvbnN0IFZGb2N1cyA9IHtcblxufVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIHN0YXRlLnZhbHVlID0gIXN0YXRlLnZhbHVlXG59LCAyMDAwKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1mb2N1cz1cInN0YXRlXCIgdHlwZT1cInRleHRcIj5cbjwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


这个挑战开始,我们将尝试编写自定义指令,让我们从`v-focus`开始 👇:

```ts
<script setup lang='ts'>
import { ref } from "vue"

const state = ref(false)

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
*/
const VFocus = {

}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>

```


点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
