<!--info-header-start--><h1>useCounter <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFUD1PwzAQ/SunLNCoImWNkgJiYkBMMHlxzRWsOo5ln/lQ5P/O2SlRkSqxRDm/j3vvpurOuauPiFVbdUF57QgCUnRgpH3rLyhcbIUVVltCv5cK4Tng/Rjz+ORIjzbAJCzAoO1NCzYOO/Rlll8nc8oeTV0zUsPD4AwOaAnoHUGNgxuD3BmEfbQqWxbWozwghOixsH4h+Bz9IbDIe1RkvoWtG2EXNC7hLrXVpKV5kSYi9LBZwzjnbc9U6GFKq1zkGFXxI8HEe5i2Bm3VGl6RPx75OpBYcLKKvad8gDZv4eItXG8grbJR18xHLUfsCLm6JOQJoHPbYtDCdFwEKXWNm8FdJOJCt8podehFxRFEVSDIcQqnmUnnBRx3EeT/fwWl2iKZp7+irjkpUKUffqLGcw==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
