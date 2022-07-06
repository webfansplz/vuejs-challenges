<!--info-header-start--><h1>Lifecycle Hooks <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Lifecycle-999" alt="#Lifecycle"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqNUrtygzAQ/JWLKmdMwGk92JOMqxTpUqqxQThKhKQREi4Y/j2nB/hVxN3pdrVadhnIu9Z57xhZk7KrDNcWOmadBrGXxw0ltqNkSyVvtTIWBjCsyUAb1fOawQiNUS1QggKUzKzdNxf1BOVFOPo3PIXKSsnOQs87fhAMNl5xYY1jzxNkectMAqQTYgYq5aRNwAq3ycYCXforlGTx7hUULnkoDAhR2ThZWa4kWHU8CrZ4hoFKmCzl/V44b+zpakHlSGVZxIwwETxY1mqxtwxPAGXN+zDgGAPoX3iDCSYVSqCYcJ0GHA/OWnTyVgle/fq8g6WQeWQAfIVVSnWnMGPJ8JMmhSJKTNpFFC+L6KcsLlySjMxlPFq4kp8+OFZnwOUPq+xd67e9Rdq5lbv+ZkLqJpQyv7PAPjbbWElQmAs5cVmrU452P5BocH3Jhagf2culX40ZvK5W/lcZwxsP1neu5ybzNQxD+ooR/4b/8x7/AAjTI4w=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use the `Composition API: Lifecycle Hooks` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // The timer will work abnormally when the child component is toggled. Lets fix it.
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=10%20-%20Lifecycle%20Hooks" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A10+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
