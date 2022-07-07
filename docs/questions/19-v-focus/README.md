<!--info-header-start--><h1>v-focus <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNUDFOxDAQ/MriJrkILhElSk6iQbqClspNyG1yFo5t2esAivJ31g7SXWNpdmfGM7uKV+eOS0TxItoweOUIAlJ0oHszdQWF4iSNmp31BCt4HGGD0dsZpGCVFNJIM1gTWEY9IXSJU469DnhIu7qqpIEKzrPTOKMhoCvCEAOxx0V5HEgtmCnv/RdCiB4zRRkXCfBfNFqWYKg/dfQBvq9oMqnInxagApCdJo2X5CRNVd9yfbwlLQdb02xLDzc8G0K/9LosD9Cd0g72BkcextTj4Q6y7hGem6bJndp6vxRfhgEhV2MmI4B2j7085cCdFNlECqBfhwwJf0gKprb1nU5sf6sriZM=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we'll start by creating a custom directive. Lets start with `v-focus` 👇: 

```vue
<script setup lang='ts'>
import { ref } from "vue"

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
*/

const VFocus = {

}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=19%20-%20v-focus" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A19+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
