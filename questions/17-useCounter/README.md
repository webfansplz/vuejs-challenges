<!--info-header-start--><h1>useCounter <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmludGVyZmFjZSBVc2VDb3VudGVyT3B0aW9ucyB7XG4gIG1pbj86IG51bWJlclxuICBtYXg/OiBudW1iZXJcbn1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhlIGNvbXBvc2FibGUgZnVuY3Rpb25cbiAqIE1ha2UgdGhlIGZ1bmN0aW9uIHdvcmsgZmluZVxuKi9cbmZ1bmN0aW9uIHVzZUNvdW50ZXIoaW5pdGlhbFZhbHVlID0gMCwgb3B0aW9uczogVXNlQ291bnRlck9wdGlvbnMgPSB7fSkge1xuXG59XG5cbmNvbnN0IHsgY291bnQsIGluYywgZGVjLCByZXNldCB9ID0gdXNlQ291bnRlcigwLCB7IG1pbjogMCwgbWF4OiAxMCB9KVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cD5Db3VudDoge3sgY291bnQgfX08L3A+XG4gIDxidXR0b24gQGNsaWNrPVwiaW5jXCI+XG4gICAgaW5jXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIEBjbGljaz1cImRlY1wiPlxuICAgIGRlY1xuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBAY2xpY2s9XCJyZXNldFwiPlxuICAgIHJlc2V0XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a counter. 👇: 


```vue
<script setup lang='ts'>

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * Implement the composable function
 * 1. inc (+)
 * 2. dec (-)
 * 3. reset 
 * 4. min & max opotion support
 * Make sure the function works correctly
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {

}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=17%20-%20useCounter" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A17+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
