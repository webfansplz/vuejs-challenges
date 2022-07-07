<!--info-header-start--><h1>v-active-style <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUctO6zAQ/ZWjbNJULrnvi6oEwZIFKxAbjERIp61Vx44cJ4Ci/DtjpwXEJrE9x+flMblq27Ohp2SdFF3tVOvRke9b6MrsytR36YU00qimtc5jhKMtJmydbSATvieTMM6XS2mwxHXTamrIePg9oe47z7iNclR7NVCE3FQHQtc7ihCtOg/lqYGnV4/aautQ71mbOnjLchu87MlE8JO3u52mu+r5CSqMw24TWKVZ5tLU1jDb/VUUu/VvmlBiDP6m8JnHUbHEw0+BXwK/Bf4I/BX4J/Bf4PzxBKsiCUsxljMvfmTSbHvDp5bNnHwslNnQ6xqmb57JZUEMn1fPhkr3wUNEHV0U+VxzrLXg5K2uPPEOKHod/7zSal4Aw2prXSmTRWhJRKaMCWOOUP6MWh/ojUGz0MfpsJq9rLpQBs8fxjRWnK5TbjadxCJDefE1bHl0+/jJcllrVR/49rfY2QlyNA2M4/yWEyeNMXKt5mR5jFbkX/Im0zvyAtK9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement an active-style-directive. Lets go 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
 *
*/
const VActiveStyle = {

}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=24%20-%20v-active-style" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A24+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
