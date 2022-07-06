<!--info-header-start--><h1>custom ref <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUMFqAjEU/JUhJ12sKz2WVSj00kMvPecS43M3mE1C8qIV8d/7VlsQD4HMm/eGmbmo95SWx0rqTXXFZpcYhbimjQ5uTDEzLjgZtgOu2Oc4QivZ1koHHdqm0QENPsfkaaTA4IGwr8Gyi8I3rQ7/CLXQB22jQNp90352NL7SAjvy5ow1XlerOS6T6lUHG0MRMfphYZ4PtRrI+6jV/NHDlzkQSs1082CN91tjD4jBn9ETF3B2fU+ZdjKzhNNAAWL5NhmrZycZwG6kAhdgYCmzkd80ipXvaW5NzCZjC9wTzLHeTL6ByXT0tPSx/6Mki7yuvfcqjQpgkrIMkyCgcyFVxvFljNLDWqtJWSu0wnbtw6q6/gLrIZZB" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


The `debounce function` is so useful in the input box manipulation scenarios.

A `debounced ref` is even more flexible in `Vue.js`. Lets go 👇: 

```vue
<script setup>
import { watch } from "vue"

/**
 * Implement the function
*/
function useDebouncedRef(value, delay = 200) {

}
const text = useDebouncedRef("hello")

/**
 * Make sure the callback only gets triggered once when entered multiple times in a certain timeout
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=23%20-%20custom%20ref" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A23+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
