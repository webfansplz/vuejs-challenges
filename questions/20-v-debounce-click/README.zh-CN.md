<!--info-header-start--><h1>节流点击指令 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBjdXN0b20gZGlyZWN0aXZlXG4gKiBNYWtlIHN1cmUgdGhlIGBvbkNsaWNrYCBtZXRob2Qgb25seSB0cmlnZ2VyZWQgb25jZSB3aGVuIGNsaWNrZWQgbWFueSB0aW1lcyBxdWlja3lcbiAqIEFuZCB5b3UgbmVlZCB0byBzdXBwb3J0IHRoZSBkZWJvdW5jZSBkZWxheSB0aW1lIG9wdGlvbi4gZS5nIGB2LWRlYm91bmNlLWNsaWNrLm1zYFxuICpcbiovXG5cbmNvbnN0IFZEZWJvdW5jZUNsaWNrID0ge1xuXG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gIGNvbnNvbGUubG9nKFwiT25seSB0cmlnZ2VyZWQgb25jZSB3aGVuIGNsaWNrZWQgbWFueSB0aW1lcyBxdWlja3lcIilcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiB2LWRlYm91bmNlLWNsaWNrLjIwMD1cIm9uQ2xpY2tcIj5cbiAgICBDbGljayBvbiBpdCBtYW55IHRpbWVzIHF1aWNrbHlcbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中,我们将尝试实现一个节流点击指令,让我们开始吧 👇:

```ts
<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持节流延迟时间选项, 用法如 `v-debounce-click.ms`
 *
*/

const VDebounceClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <button v-debounce-click.200="onClick">
    Click on it many times quickly
  </button>
</template>

```


点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
