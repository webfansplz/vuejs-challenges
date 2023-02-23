<!--info-header-start--><h1>custom element <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Web%20Components-999" alt="#Web Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNptUstu2zAQ/JUtL5YNW7oHkt0GKJAU9aUweuJFEdc2E4kkxKUfMPzvXZpyLAQ96CByhrM7Mxfxw7n8EFA8idI3vXYEHik4aGuzqybkJ0tppNGdsz3BBaxZ22AIFVxh29sOpGC2FBFUzGbSwAxeO9dih4aA9giNVQhkoemxJoQamuCJiZgw+Y2yrj8YxGgbyAUCuwVX7xD83h5Z4gXb1sLfgPm7l4Ips0KaxhpP8fCXh4pBq9UqzfE5Y5ZNoVrChSVA2Sbc9HZIP5P08/lVZVLUzkkx/ZZrY7B/2ax/314rea3Fu4cOvedJKim/jMH/y7JIqGUUvk6jeFkkG2+2lYTsBa/NfwCl0gfQqhokmc0HfFMWI5iYC20UnnJCTzl5DubT/C6u9TD+O4sz1dMikG7ZmFFOCuMYbzgHTXPAk8NmxDzoSEtuDRTuwf02L4ZSJMD9KbYqRbdoLHMMOyjFHEYea2IMRxZaBUfbf3y5Bu5CjOzY8/7Ys823hTJWm/PINVHd7Df26ZHVm1VniL4+yEN7qvsr+ZbtyiYph8kATftmCZvjSXvy2XSak33GTR9of87+jxw66fe1ssc/1tLqUYtE5w1L72qzHJeBQ49HXKP4ahw4fuL6D9sOJxo=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


Have you heard about `Web Components` ? 

Vue has excellent support for both creating and consuming custom elements. 

For this challenge, you can try it out. Lets go 👇: 

```vue
<script setup lang='ts'>

import { onMounted } from "vue"

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
*/
const VueJs = "???"

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=22%20-%20custom%20element" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A22+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
