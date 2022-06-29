<!--info-header-start--><h1>useMouse <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHVzZU1vdXNlIH0gZnJvbSBcIi4vbW91c2UuanNcIlxuXG4vLyBJbXBsZW1lbnQgLi4uXG5mdW5jdGlvbiB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnQsIGNhbGxiYWNrKSB7XG5cbn1cblxuLy8gSW1wbGVtZW50IC4uLlxuZnVuY3Rpb24gdXNlTW91c2UoKSB7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcIm1vdXNlbW92ZVwiLCAoKSA9PiB7fSlcbn1cbmNvbnN0IHsgeCwgeSB9ID0gdXNlTW91c2UoKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5Nb3VzZSBwb3NpdGlvbiBpcyBhdDoge3sgeCB9fSwge3sgeSB9fTwvdGVtcGxhdGU+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We should focus on Reusability when use `Vue.js`,Composables functions are a good way,let's go 👇: 


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

Click the `Take the Challenge` button to start coding! Happy Hacking!
