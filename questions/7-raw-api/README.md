<!--info-header-start--><h1>Raw API <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqlUbFugzAU/JWTpwRVoK4RVOrYoUu7enGJSa2CbeEHVYX49z5sSFCXDtnu5Lt79/wm8ex9Pg5anEQZ6t54QtA0eLTKXiopKEjxJK3pvOsJE3qtajKjfoAJbyvGjKZ3HaTgICmklbZ2NnASKdKo2Fa7wdIJj5i3ty3ofdVs/BBNxyWkyDJpkeHVnU3zA/rUnHPWCI6xInwzVxad+tLx0Q3kB8IHs37QubRZkaa5Vuetuxz+zKyq1PDOYY1qw34awdjG/bP2S5Jct14ssce+7+2Lr9UX3zEKyyLdi6/DhHTnW96FGVCezRgBQ78CYLpdL35AHtth5m5RWSRpWSR3WewyxfwLXYvBcA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: [xx]Raw` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { reactive, isReactive } from "vue"

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * Modify the code so that we can make the output be true.
*/
console.log(reactiveState === state)

/**
 * Modify the code so that we can make the output be false.
*/
const info = { count: 1 }
const reactiveInfo = reactive(info)

console.log(isReactive(reactiveInfo))

</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>


```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=7%20-%20Raw%20API" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A7+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
