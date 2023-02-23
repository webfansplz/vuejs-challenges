<!--info-header-start--><h1>v-debounce-click <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdU01P20AQ/SsjX3CCcShH6qBCqdRWpRxatQeMFGNPnBX27nZ3nGCh/PfOfgTSD1Uqh8TxzJt5M29eHpNzrfP1gMlpUtjaCE1gkQYNXSXb+QHZg7NSlnI2nZYSpvCh1x32KAlohVAPllQPjTBYk1ijh1xV9wh2MOghCyXfdqK+X0CPtFINKNmN0CJZICPaFg26WI2wWaGE2mE50ldyBBI9WvgxcKgbfe9z2cCoBqg6q0AiA0kxl9bKhIkavFOD69ZgV4UOoDQJJXPAvIXF+mgHOfJcp71duNalnM7corWSluDbZQT52WEOjy63dV9LDrt+PLRPphOXBHCFqsO8U21aJtduy/9cMJlEimIWLuGVLwhZ84qQ3wCKu4GIyf9Y4+T4eF4mcaYy8WCAMD7jBf1dUihmoSMXFLM9qiRLhGzwISe0lJNlf4jey/wIPRMTbGFp+Phl8obtw6WWjgYSnS2TUj5BG3Sr3GHGE2SAD5qNksFaPFevhSvdK6JRI1deXl99N5XWaP7J9FTGPt7B8lk0dQBUdpQ1PN0tXiUcjyrDXjzdYyvef736dOE1eResfpZF2ebwKh57qQykHRIIDh6/5kcRMPzz8JDv6MSvNhXLHhjyyMrW8Pd6PvZOIc78ftQyyYDtNT8LpIIYY1dq6BrYKOPTfrc9TPAhgUE7dLyXZV7Z3tzymDe3z4BoVI6uRb6UacovO/B+M4iNcj3YlQPF1bbxGcg28U7z4IyU1f9Vgn3FIzhfsr14n+A+liODk1gUXJJ+/HL9OQ8jieWYhkEmk5zUhRPrpixf9jfjslsvf1jDfZLtTyyAvcA=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a debounced-click-directive. Lets go 👇: 

```vue
<script setup lang='ts'>

/**
  * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/

const VDebounceClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=20%20-%20v-debounce-click" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A20+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
