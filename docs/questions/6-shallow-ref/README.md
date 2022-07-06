<!--info-header-start--><h1>shallow ref <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNkE9rhDAQxb/KIydXFkN7XHSh0Gtb6J9bLqnOurIxCSauFPG7d9QVvM0w7/3mzYzixfvs3pM4iTyUXeMjAsXew2hbF0rEoMRZ2ab1rosYEa7aGDd80uWIQcfyigmXzrVQgilKKKts6WxgTNSRUOwcyYjS9Tae8ITpMCulxKujgPePb8SuqWvqlF2wyWI/IjmgOGNUFuy1wRnKjKsTJb7mebbw8OMrbiolGDodOWVF5E9M7GlblKaMSPHmqubyh3glxlWE4LjWEQP32qLVN1qG62klJ//V5W3LlimbSsXHzavv2vRbgALP85Zcri/kh3ETqfWGldwBedXcl4JL/yiAkR+6u2OaHgq5SnK5unK5Y4npH/zDlNM=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: shallowRef` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { shallowRef, watch } from "vue"

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * Modify the code so that we can make the watch callback trigger.
*/
state.value.count = 2

</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=6%20-%20shallow%20ref" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A6+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
