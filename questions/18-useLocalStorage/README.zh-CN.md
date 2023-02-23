<!--info-header-start--><h1>实现本地存储函数 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtU02P2jAQ/SsjXzawNNleEax221Ol9lS1vfhiwpC1MLZljxcQyn/vOCYp4lKp6gFQMu+9+XiPi3j1vn5PKJZiFdugPUFESh6Mst36geLDs7TS6oN3geACAXfQwy64A0jBPClyuZnPpYU5fDl4gwe0BPSG0DpmRbUxCLtkW9KOoYz6pvYIMQUcUGMJji7sI5NCwJbMWdp5I+1UTRG/ulaZ7+SC6rDa43kJkYK23QK01aSV+alMwiUoe57BhVuxmI0E7/k1rPPs1S1ylkcHfk0p2IKSts8vC691yRIGZt43l+Jak2IBT4NO08AvXllZ6JDA3KBhcwaes+swDzvszBAmL0sjZ7A2rquukvUwyKj5ardwLLrKRJfN+Zs4Q4r4uEfyW0X5ANUM1s/jWqXP42PGrZri/eD1ipBtZAY/Aaz88+dCWMLlMt2k71eNL4BNImKDXlqj2/1aitJOiqEK8KM8ZmRToFxYNTdNxEJou8VTTRippshZnPJ2yP3+JO6FI8fUSB8SaRNz+iboFvMSG+Q40ALw5DlGN1nVmVbieqVw9Mdq3Vz/BwUwSrHRd9Znw8sZh4BpYkh8c8mwTZzfXFbxbNsbDIBh045BeT+EaVip4n7sca6WSasroN7xLVjUSzHjg5yomvGv+5RnmYx44mIhq6PSk/jILWceBEo0cmCzOxPtH3p+HMiFPvKSLcvcF/7PlqUjQM/f+SP63xl/nsc=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


我们经常需要使用`localStorage`API，一个好用的可组合函数封装将帮助我们更好地使用它，让我们开始吧 👇: 


```vue
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
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=18%20-%20%E5%AE%9E%E7%8E%B0%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E5%87%BD%E6%95%B0" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A18+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
