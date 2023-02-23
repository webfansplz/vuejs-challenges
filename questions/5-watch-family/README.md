<!--info-header-start--><h1>watch family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVNtu2kAQ/ZWRn2xEbdK+VIikl6hRVTVN1ETqA+ZhsQezzXpt7a4hCPHvnb0YnKi0DwjvzpnLmZmz++hT26abDqNpNNOF4q0BjaZrQTBZXeaR0Xl0lUtet40ysAeFqzFsmSnWcICVamrII3LPo1zmsmikNlA0nTRwaaHxJLH32WiUSxjB9ZoJgbJCuJjCLxekkQU62y17QtCdQjBrDBkKgi9Z8UQosQOjeFWh0sFnlOXSwWKXcAxxApdXsKdoVILUjcBUNFWcR3cDbyy9e0SFHVxxzjvdMNEhFX2RS+L/yGtsOhP7kC8Rb89QenuktPyNhfk/Ka5PRXk6vn/aMGMT2f4FNpR/CpNxX7Kn7XD/oP1IKR0m9RPp2pIO5YC6tzpiAUP0/s7u3RSu+8JvRKfXQD3isnpFc8M1pxyObsgHKPAnrjzDnqO/CySpFn/LKJG/sk32LOnuLEcfxRMIpAh+muV7m3CW+b2mLaaDwboVVBadAGYl37gP+mzDB8B+H1b4cAi2rDfOWlsdySJwstI4OtnqX7vMMp9ilg0SR+OIyxKfU4PapEaT9o76qn3mXlofSVvkqs2bznBBWhxIsURLbEnt4bT9+NzS1o1pAgNh0iy08doMbiT33ppmQfsesOpkYXgjKa5gu9h4CUxBdvUSVeK7r+htUBIkbuGeonCNcayQBrLB04jAPiG9hIJ1DCEgzQjAToo6lVMXPAdaVy+eG0ZrJXZ59GLo3BBAr5tOlLBt1JM1M72TxQDjV8NQiboTVLcmcclqvqBFmC9OgLA7dLvh6UrGMR168DCY5WoDpS0tuwV9SE3z4GBxQt+K13HiyHg69t8NL6auhjPbMm5CPy8mE/sY2ms/qvjbw92P1Cfmq51tFKVLEkrzGV8b531RZ14zehp6+1nZDzBz/0bB18fb7/dMsUqxdv1FYI3SLI7IhefnhkW/6PAHUjwP7g==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: watch` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * Challenge 1: Watch once
 * Make sure the watch callback is only triggered once
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * Challenges 2: Watch object
 * Make sure the watch callback is triggered
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * Challenge 3: Callback Flush Timing
 * Make sure visited the updated eleRef
*/

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
})
age.value = 18

</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=5%20-%20watch%20family" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A5+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
