<!--info-header-start--><h1>effectScope API <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUctugzAQ/JWRT6RCQY16iiBSVPXQW6X26EMILAQVbMuP9ID49y6vJMrJ6x3PeGa3F0djttdAYi9SV9jGeDjywaDNVZ1J4Z0UB6mazmjr0cNSFaPQnQmeyhh/uS8uy/FRVVR4DKis7iAFq0ohlVSFVs4zKShPFtmoEb1u1n6pw7mlkvurbBRtkB1Wwvaat4Hwgh1TpEoSBEfwF8KJph+/C23ohOPXJ7xGl/9OKL+ZYQfntWGoJm5b5NXo4kyNquFtU9dk+XetChrlpyTR4inG6kQ53dK21fUKza42bOkh+834/bkU72OMPc8jXqPeueMMHkNm2I1N3sBP05EOq2IvFZ7mkeFNqmHSSJN5c7wnvnjqTJt74huQls11Krg0SwH0/W3qw7CgyQynycxIkwcdMfwDpH69fA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: effectScope` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once

watch(doubled, () => console.log(doubled.value))
watchEffect(() => console.log("Count: ", doubled.value))

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>


```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=8%20-%20effectScope%20API" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A8+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
