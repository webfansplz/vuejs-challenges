<!--info-header-start--><h1>useLocalStorage <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY29tcG9zYWJsZSBmdW5jdGlvblxuICogTWFrZSB0aGUgZnVuY3Rpb24gd29yayBmaW5lXG4qL1xuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpbml0aWFsVmFsdWU6IGFueSkge1xuICBjb25zdCB2YWx1ZSA9IHJlZihpbml0aWFsVmFsdWUpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmNvbnN0IGNvdW50ZXIgPSB1c2VMb2NhbFN0b3JhZ2UoXCJjb3VudGVyXCIsIDApXG5cbi8vIFdlIGNhbiBnZXQgbG9jYWxTdG9yYWdlIHZpYSB0cmlnZ2VyZWQgdGhlIGdldHRlcjpcbmNvbnNvbGUubG9nKGNvdW50ZXIudmFsdWUpXG5cbi8vIEFuZCBXZSBhbHNvIGNhbiBzZXQgbG9jYWxTdG9yYWdlIHZpYSB0cmlnZ2VyZWQgdGhlIHNldHRlcjpcblxuY291bnRlci52YWx1ZSA9IDFcblxuPC9zY3JpcHQ+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We often need to use the `localStorage` API, A composable function will help us better use it, Let's go. 👇: 


```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the composable function
 * Make the function work fine
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get localStorage via triggered the getter:
console.log(counter.value)

// And We also can set localStorage via triggered the setter:

counter.value = 1

</script>

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
