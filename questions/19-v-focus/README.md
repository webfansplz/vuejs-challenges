<!--info-header-start--><h1>v-focus <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVUk2L2zAQ/StTXeIErx3aW0iWttDCHgo9LD3potjjRKwtGWmUD0L+e0eSk81t2YON5Xlv9Oa9uYgf41gdAoqVWPvG6ZHAI4URemV2mxn52bM0ehitI7iAww6u0Dk7gBTMkkIaaRprPNNIEcImYopO9R7nsVYvFtLAAl6GsccBDQHtEZrgiXu02mFD+oAJ8ke9IfjgMEG0GQMBTqTOMgV9ve2D83Dco0mgWbp0BtoD2d2uxzZ2kmZRv+v69ztyWdgl/rvGF0/4YgjdQfVFMYfNc6xBnqDinyHO8eXhyLwSvi6XyzTTus5OsTN8IOTRGMkngHWWfXhKgjdSpCZSAJ1H5CPhiaRg6Lp+4IlSaNPiqSL0VJHnMO6WDzbw/HfTv7PrTPX0FEj3PgZwh7YYdW2xBE0l4Glkcx/i0pGWE5sonP2tWtXTImRAFwwHYw337NW5ID2gDbQCE4Ytunn2y/GiOAMGj/CXu2iPReHQ2/6A76ayrUivmX+rljA1ZDsBrvxOsdz0Fyw2GyhFCQ8BaeKS39vQt3C07i2WlT+b5gEDkGM/OjWO6DjI5GDB45U3BIAiUs3+1a6g5XviilVb257LXI+K8lc2sZiaVR3HxBJSyFLMq2k955WxnJv9icW9nUqL/WsC5G7qqDRNln7L2/SZSz66IBnJj7j+BymQVMA=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
