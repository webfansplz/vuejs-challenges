<!--info-header-start--><h1>useToggle <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtUbFu2zAQ/ZUDF0mGK9UdDdlNOgTo0HRotzADo5xVwhRFkKfYgaB/71FSFGcIkCGDJFD33ju+93px7Vz+1KHYijJUXjuCgNQ5MMrWu4RCspdW2mK1khZW8LNxBhu0BAqqtnFtUA8G4dDZinRrgf4pAmrr2mDgA0IgRThSf6kjjr8W8Kn1R1bxHisyz9KuCmmXYRfw76iTZtDHKwzxVbU2ENyNqut50T3sLtAHZQJmEVsWk6HRQEnIV2cWnwBKt/8TJbbQ99MV4Tskv28T2PLn5iaBYSgLN2PhqjK6Ou6kmBZKMQ4AppWLR5goZXGxS6yFto94zgkD5RQ4Z82xeYIemrbjIAc4+LYBKa64BqYG+tKRNkEKaRfoI0YvD+xZ0xrw7DiyV+aTjrRIWChc68s0L+aOJ8CLVCrFkpoUa+Ccd/sYNfAOHk5eZ3M8V+HZVhcg4OpiGSevnEPPJYx+Ul7G8b/O3YZHMyg/cBjXxrC8kyK7+3r/BvntfeRmRk7WU7fhQM+UZllO7Y/oZe6Ty2N49BnR6qR01M3J67pGz7ixyhHyIbnbT1WbLwcw8Ds+YvgP9uMrqg==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we'll start by creating a composable function. Lets start with `useToggle` 👇: 


```vue
<script setup lang='ts'>

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=15%20-%20useToggle" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A15+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
