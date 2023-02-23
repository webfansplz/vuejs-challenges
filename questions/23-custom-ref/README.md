<!--info-header-start--><h1>custom ref <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtU8tu2zAQ/JUtL5YNRw56DJy0BXoJ0ABFU/TECy2tbSIUKZArO0GQf+9QsmyhtxQ5CBL3pdmZ4av61rbloWN1o9apirYVSixde6e9bdoQhV7paKTa0xttY2hIK1Rrpb32q8VCe1rQfdM6btgLyZ5p2/lKbEB+sdJ+PFGX+DtvAo5c/+JtcTCu4yXV7MwL3dLn6+s5veapb9pXwScM42dB5t9GrfbsXNBqPsXwYJ6YUhe5x1AZ5zameqLg3QvtWBJJtLsdR64Rq5iOe/YEyH2k6ZxY7EBiG05kPRmqOIrBVw6FToZteiaKDGxJwwZzur3LuIky6OC4dGF3SmEXPOvVwCsYxUEYZBlhnIjW1red0OGqCeDhVqs8WStaIbteTUrVUllf83MpnKSUBLXO6jSgRi7qfIU8aE1y1Yl1KSt1Lq05Q9mAdosF+LnlCu+DnWhrc+sg76kNBhmz5erklqHgrG0vYnFi6oZ812w49nISRbgpevJ8pJ+YYhMXRWQwdZhwR9l0v4f+MbscqQeHRJlJOEODhWEH+KDqkoTmKvJWK+hxGWcF2bQPnavpGOJTTpv04qtJDZFjoTZaLz/CDj6bzYbwREdED7bc+qLA4YYSPOR30xE0HYCaL6WEx76qmOM72qbo0Q/4L/OFjtG0LUe09foVIPZcYY7GnivKLZTHOr1VYPoSTP3J9hovwqf+JuS+QdBihDQHmIds2HvvrOdHb1pwIsUM6qnZqWf41yBgvoPvnTRCyPPeiR7KuPo/wE9/+RErnHAM43qf4VFvfwEEMr8j" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
