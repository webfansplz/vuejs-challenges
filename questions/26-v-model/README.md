<!--info-header-start--><h1>v-model <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpNT7tuwzAM/BVCS1oDjvfCLlB0aYeiWyYtqk0nKiRKkCingeF/LxUvWQiQ9+Ddqt5iPC4F1Yvq85hsZMjIJYIzdB4OnA+vmjRZH0NiWCHhDBvMKXjQSnRaVbhrGk3QwKePDj0Sg4GxZBbWZBOObBe8E94TGkZB+Rraq7nBj6XJ0hkCyXEOyYOlWBhw96kiTU2naQyUGU7fl68woYMB1vp4q2OHFuMKyl0SPmn1gc4FOBU8/matniut7/aC90I9o2SVLLIB9PvTpQ2X1lf/QcpVP62AbxFlZfxj2Trh992DWG3/u8pxLg==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a simple `v-model` directive. Lets go 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
*/
const VOhModel = {

}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=26%20-%20v-model" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A26+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
