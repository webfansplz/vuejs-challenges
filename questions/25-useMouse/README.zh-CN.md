<!--info-header-start--><h1>鼠标坐标 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHVzZU1vdXNlIH0gZnJvbSBcIi4vbW91c2UuanNcIlxuXG4vLyBJbXBsZW1lbnQgLi4uXG5mdW5jdGlvbiB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnQsIGNhbGxiYWNrKSB7XG5cbn1cblxuLy8gSW1wbGVtZW50IC4uLlxuZnVuY3Rpb24gdXNlTW91c2UoKSB7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcIm1vdXNlbW92ZVwiLCAoKSA9PiB7fSlcbn1cbmNvbnN0IHsgeCwgeSB9ID0gdXNlTW91c2UoKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5Nb3VzZSBwb3NpdGlvbiBpcyBhdDoge3sgeCB9fSwge3sgeSB9fTwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在使用`Vue.js`时,我们应该关注可复用性,可组合函数是一个很好的方式,让我们开始吧 👇: 


```ts
<script setup>
import { useMouse } from "./mouse.js"

// Implement ...
function useEventListener(target, event, callback) {

}

// Implement ...
function useMouse() {
  useEventListener(window, "mousemove", () => {})
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>


```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
