<!--info-header-start--><h1>useLocalStorage <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFkUFvwjAMhf+KlQtQIbpdK5jEcdJ2mrRdcgmdySJSp0ocUIX473NamNAuXP3e+/wsn9W271fHjKpR69RG1zMk5NyDN2Q3M06zF02aXNeHyHCGiHu4wD6GDrSSnFZFrqtKE1Tw2vUeOyQG/kFog6SS2XmEfaaWXRCruN7NASHliKPrJsEpxEOSUIzYsh80VbWmPzUnfAut8R8corE4P+DQQOLoyC7BkWNn/KfxGRswNCzgLKsERonhWMawKd3n985FqQ4y5hxpcmm6lOGUa0MmxijJ/8u1umpaLeFp5NQ1fMnJhsAig79zw24A6WktlrLjzWKRcDMtCh5XPtj5Fbkai9yYW/qG08Q1PoXynEdwsUzwgr9Dyh3PZbiup0fLY9XlF+VXuSw=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We often need to use the `localStorage` API. A composable function will help us use it better. Lets go. 👇: 


```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the composable function
 Make sure the function works correctly
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(initialValue)

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get the localStorage by triggering the getter:
console.log(counter.value)

// And we also can set the localStorage by triggering the setter:

counter.value = 1

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=18%20-%20useLocalStorage" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A18+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
