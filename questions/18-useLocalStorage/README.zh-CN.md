<!--info-header-start--><h1>实现本地存储函数 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgY29tcG9zYWJsZSBmdW5jdGlvblxuICogTWFrZSB0aGUgZnVuY3Rpb24gd29yayBmaW5lXG4qL1xuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpbml0aWFsVmFsdWU6IGFueSkge1xuICBjb25zdCB2YWx1ZSA9IHJlZihpbml0aWFsVmFsdWUpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmNvbnN0IGNvdW50ZXIgPSB1c2VMb2NhbFN0b3JhZ2UoXCJjb3VudGVyXCIsIDApXG5cbi8vIFdlIGNhbiBnZXQgbG9jYWxTdG9yYWdlIHZpYSB0cmlnZ2VyZWQgdGhlIGdldHRlcjpcbmNvbnNvbGUubG9nKGNvdW50ZXIudmFsdWUpXG5cbi8vIEFuZCBXZSBhbHNvIGNhbiBzZXQgbG9jYWxTdG9yYWdlIHZpYSB0cmlnZ2VyZWQgdGhlIHNldHRlcjpcblxuY291bnRlci52YWx1ZSA9IDFcblxuPC9zY3JpcHQ+XG4ifQ==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


我们经常需要使用`localStorage`API,一个好用的可组合函数封装将帮助我们更好地使用它,让我们开始吧 👇: 


```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现`useLocalStorage`函数
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// 我们可以通过触发`counter`的`getter`来获取本地存储的值
console.log(counter.value)

// 同样地,我们也可以通过触发`counter`的`setter`来设置本地存储的值

counter.value = 1

</script>

```

点击上方的 `接受挑战` 开始编码 ！旅途愉快 ！
