<!--info-header-start--><h1>useLocalStorage <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtU02P2jAQ/SsjXzawNNleEax221Ol9lS1vfhiwpC1MLZljxcQyn/vOCYp4lKp6gFQMu+9+XiPi3j1vn5PKJZiFdugPUFESh6Mst36geLDs7TS6oN3geACAXfQwy64A0jBPClyuZnPpYU5fDl4gwe0BPSG0DpmRbUxCLtkW9KOoYz6pvYIMQUcUGMJji7sI5NCwJbMWdp5I+1UTRG/ulaZ7+SC6rDa43kJkYK23QK01aSV+alMwiUoe57BhVuxmI0E7/k1rPPs1S1ylkcHfk0p2IKSts8vC691yRIGZt43l+Jak2IBT4NO08AvXllZ6JDA3KBhcwaes+swDzvszBAmL0sjZ7A2rquukvUwyKj5ardwLLrKRJfN+Zs4Q4r4uEfyW0X5ANUM1s/jWqXP42PGrZri/eD1ipBtZAY/Aaz88+dCWMLlMt2k71eNL4BNImKDXlqj2/1aitJOiqEK8KM8ZmRToFxYNTdNxEJou8VTTRippshZnPJ2yP3+JO6FI8fUSB8SaRNz+iboFvMSG+Q40ALw5DlGN1nVmVbieqVw9Mdq3Vz/BwUwSrHRd9Znw8sZh4BpYkh8c8mwTZzfXFbxbNsbDIBh045BeT+EaVip4n7sca6WSasroN7xLVjUSzHjg5yomvGv+5RnmYx44mIhq6PSk/jILWceBEo0cmCzOxPtH3p+HMiFPvKSLcvcF/7PlqUjQM/f+SP63xl/nsc=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We often need to use the `localStorage` API. A composable function will help us use it better. Lets go. 👇: 


```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the composable function
 Make sure the function works correctly
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get the localStorage by triggering the getter:
console.log(counter.value)

// And we also can set the localStorage by triggering the setter:

counter.value = 1

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=18%20-%20useLocalStorage" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A18+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
