<!--info-header-start--><h1>useToggle <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNT81OhDAQfpUvveASI3dSVr1s4kE96M16qM0sEkrb0EFjCO9uKRuylzYz8/3O4jGEu5+JRC1kNGMXGJF4CrDatU3BsTgqp1xVlsqhxNMQLA3kGBrGD8FH/WUJ58kZ7rwDf2sG+7a1FNNAiKyZMvVZ95RXO/jXj31SGUcybP+UKyvl9uMU6T3r3BwwrxGW9THeRcZHVr29GH2iuUKftY10WLGy2grlApIpRU+sNAEyHN9WiRrzvEXEPYrXlwJ1+k6nAssiq3DB4sHYzvSNEpuhEvkAbJZ7R2wUWV15ieUfKuF7FA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
