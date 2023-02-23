<!--info-header-start--><h1>浅层 ref <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUk1v2zAM/SuETk7g2diOgVPs67DLVmBbb7qoFpMIsSXBop0Whv97aclu3R4MkyDf0yMfR/HN+2LoURxEFerOeIKA1HtolD0fpaAgxZ20pvWuIxghXFTTuNtfPOVwU1RfYIJT51qQglmkkFba2tnANKQI4bhBZCPUrrd0gM8w7ebOsoSfDgP8uf8P1JnzGTtpI20W4TlkOzjewSgtMNYG12DRuHMmxb+5XkQ+ePCaEy0Fk045q9SI/sCMPa4P7fdMsYffTpvTM9AFmU4jBMexIrhxriy06oqxmEarWfmjqq+rtkLafSl5uPnpQTX9KuAIX+ZXqjKtkBfGCWHrG+7kDKDSZogBh34JAEZe6GaOaVo6ytRSlQlVlRsukQtjNT4VhIEKCuzcqzttolkd+cqWMDTQp55Mw05ujNQ4a33kFRvKAZ881vwfzMZPM0OTpQuMj2WtFuVyOalhpWNn3gyX4p2BhmLV9Y2Gm+uuH8rJYT4c/8wLHUzBwb3NFttzfpOdjx7PvXHUjDUseZogY8yuIPdLDfgd0f5gKaiz2DNfwvyJ6QW7/wB/" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: shallowRef` 来完成它。
以下是你要实现的内容 👇: 

```vue
<script setup lang="ts">
import { shallowRef, watch } from "vue"

const state = shallowRef({ count: 1 })

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * 修改以下代码使watch回调被触发
 *
*/
state.value.count = 2

</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=6%20-%20%E6%B5%85%E5%B1%82%20ref" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A6+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
