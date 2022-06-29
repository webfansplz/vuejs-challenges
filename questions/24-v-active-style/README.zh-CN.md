<!--info-header-start--><h1>激活的样式-指令 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY3VzdG9tIGRpcmVjdGl2ZVxuICogTWFrZSBzdXJlIHRoZSBsaXN0IGl0ZW0gdGV4dCBjb2xvciBjaGFuZ2UgdG8gYmUgcmVkIHdoZW4gdG9nZ2xlIHRoZSB0YWJcbiAqXG4qL1xuY29uc3QgVkFjdGl2ZVN0eWxlID0ge1xuXG59XG5cbmNvbnN0IGxpc3QgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbmNvbnN0IGFjdGl2ZVRhYiA9IHJlZigwKVxuZnVuY3Rpb24gdG9nZ2xlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgYWN0aXZlVGFiLnZhbHVlID0gaW5kZXhcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHVsPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiXG4gICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgdi1hY3RpdmUtc3R5bGU9XCJbeydjb2xvcic6J3JlZCd9LCgpID0+IGFjdGl2ZVRhYiA9PT0gaW5kZXhdXCJcbiAgICAgIEBjbGljaz1cInRvZ2dsZVRhYihpbmRleClcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0gfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->




在这个挑战中，我们将实现一个"激活的样式"指令，让我们开始吧 👇: 

```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 * 
*/
const VActiveStyle = {

}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
