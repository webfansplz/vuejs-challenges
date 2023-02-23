<!--info-header-start--><h1>切换器 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtUbFu2zAQ/ZUDF0mGK9UdDdlNOgTo0HRotzADo5xVwhRFkKfYgaB/71FSFGcIkCGDJFD33ju+93px7Vz+1KHYijJUXjuCgNQ5MMrWu4RCspdW2mK1khZW8LNxBhu0BAqqtnFtUA8G4dDZinRrgf4pAmrr2mDgA0IgRThSf6kjjr8W8Kn1R1bxHisyz9KuCmmXYRfw76iTZtDHKwzxVbU2ENyNqut50T3sLtAHZQJmEVsWk6HRQEnIV2cWnwBKt/8TJbbQ99MV4Tskv28T2PLn5iaBYSgLN2PhqjK6Ou6kmBZKMQ4AppWLR5goZXGxS6yFto94zgkD5RQ4Z82xeYIemrbjIAc4+LYBKa64BqYG+tKRNkEKaRfoI0YvD+xZ0xrw7DiyV+aTjrRIWChc68s0L+aOJ8CLVCrFkpoUa+Ccd/sYNfAOHk5eZ3M8V+HZVhcg4OpiGSevnEPPJYx+Ul7G8b/O3YZHMyg/cBjXxrC8kyK7+3r/BvntfeRmRk7WU7fhQM+UZllO7Y/oZe6Ty2N49BnR6qR01M3J67pGz7ixyhHyIbnbT1WbLwcw8Ds+YvgP9uMrqg==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


这个挑战开始,我们将尝试编写可组合函数，让我们从`useToggle`开始 👇:

```vue
<script setup lang='ts'>

/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
*/
function useToggle() {

}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=15%20-%20%E5%88%87%E6%8D%A2%E5%99%A8" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A15+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
