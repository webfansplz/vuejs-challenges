<!--info-header-start--><h1>v-active-style <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY3VzdG9tIGRpcmVjdGl2ZVxuICogTWFrZSBzdXJlIHRoZSBsaXN0IGl0ZW0gdGV4dCBjb2xvciBjaGFuZ2UgdG8gYmUgcmVkIHdoZW4gdG9nZ2xlIHRoZSB0YWJcbiAqXG4qL1xuY29uc3QgVkFjdGl2ZVN0eWxlID0ge1xuXG59XG5cbmNvbnN0IGxpc3QgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbmNvbnN0IGFjdGl2ZVRhYiA9IHJlZigwKVxuZnVuY3Rpb24gdG9nZ2xlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgYWN0aXZlVGFiLnZhbHVlID0gaW5kZXhcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHVsPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiXG4gICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgdi1hY3RpdmUtc3R5bGU9XCJbeydjb2xvcic6J3JlZCd9LCgpID0+IGFjdGl2ZVRhYiA9PT0gaW5kZXhdXCJcbiAgICAgIEBjbGljaz1cInRvZ2dsZVRhYihpbmRleClcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0gfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a active-style-directive, let's go 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the custom directive
 * Make sure the list item text color change to be red when toggle the tab
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=24%20-%20v-active-style" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A24+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
