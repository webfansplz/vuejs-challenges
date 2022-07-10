<!--info-header-start--><h1>浅层 ref <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdUk1v2zAM/SuETk7g2diOgVPs67DLVmBbb7qoFpMIsSXBop0Whv97aclu3R4MkyDf0yMfR/HN+2LoURxEFerOeIKA1HtolD0fpaAgxZ20pvWuIxghXFTTuNtfPOVwU1RfYIJT51qQglmkkFba2tnANKQI4bhBZCPUrrd0gM8w7ebOsoSfDgP8uf8P1JnzGTtpI20W4TlkOzjewSgtMNYG12DRuHMmxb+5XkQ+ePCaEy0Fk045q9SI/sCMPa4P7fdMsYffTpvTM9AFmU4jBMexIrhxriy06oqxmEarWfmjqq+rtkLafSl5uPnpQTX9KuAIX+ZXqjKtkBfGCWHrG+7kDKDSZogBh34JAEZe6GaOaVo6ytRSlQlVlRsukQtjNT4VhIEKCuzcqzttolkd+cqWMDTQp55Mw05ujNQ4a33kFRvKAZ881vwfzMZPM0OTpQuMj2WtFuVyOalhpWNn3gyX4p2BhmLV9Y2Gm+uuH8rJYT4c/8wLHUzBwb3NFttzfpOdjx7PvXHUjDUseZogY8yuIPdLDfgd0f5gKaiz2DNfwvyJ6QW7/wB/" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6IkFwcC52dWUiLCJmaWxlcyI6eyJwYWNrYWdlLmpzb24iOiJ7XCJzY3JpcHRzXCI6e1widGVzdFwiOlwidml0ZXN0IC0tZW52aXJvbm1lbnQganNkb21cIixcInRlc3Q6dWlcIjpcInZpdGVzdCAtLWVudmlyb25tZW50IGpzZG9tIC0tdWlcIixcImRldlwiOlwidml0ZVwiLFwiaW5pdFwiOlwiY29uY3VycmVudGx5IFxcXCJucG0gcnVuIGRldlxcXCIgXFxcIm5wbSBydW4gdGVzdFxcXCIgXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biBpbml0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widnVlXCI6XCJeMy4yLjM3XCJ9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiQHR5cGVzL2pzZG9tXCI6XCJeMTYuMi4xNFwiLFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6XCJeMi4zLjNcIixcIkB2aXRlc3QvdWlcIjpcIl4wLjE3LjBcIixcIkB2dWUvdGVzdC11dGlsc1wiOlwiXjIuMC4yXCIsXCJqc2RvbVwiOlwiXjIwLjAuMFwiLFwidml0ZVwiOlwiXjIuOS4xM1wiLFwidHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlLXBsdWdpbi12dWUtaW5zcGVjdG9yXCI6XCIxLjAuMVwiLFwidml0ZXN0XCI6XCJeMC4xNy4wXCIsXCJjb25jdXJyZW50bHlcIjpcIl43LjIuMlwifX0iLCJ2aXRlLmNvbmZpZy50cyI6IlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgSW5zcGVjdG9yKHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJ1xuICAgIH0pLFxuICBdLFxufSk7XG4iLCJtYWluLnRzIjoiXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKVxuIiwiaW5kZXguaHRtbCI6IlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgIDx0aXRsZT5WaXRlIEFwcDwvdGl0bGU+XG4gIDwvaGVhZD5cbiAgPGJvZHk+XG4gICAgPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4vbWFpbi50c1wiPjwvc2NyaXB0PlxuICA8L2JvZHk+XG48L2h0bWw+XG4iLCJlbnYuZC50cyI6IlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmRlY2xhcmUgbW9kdWxlICcqLnZ1ZScge1xuICBpbXBvcnQgdHlwZSB7IERlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNvbnN0IGNvbXBvbmVudDogRGVmaW5lQ29tcG9uZW50PHt9LCB7fSwgYW55PjtcbiAgZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xufVxuIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzaGFsbG93UmVmLCB3YXRjaCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBzdGF0ZSA9IHNoYWxsb3dSZWYoeyBjb3VudDogMSB9KVxuXG4vLyBEb2VzIE5PVCB0cmlnZ2VyXG53YXRjaChzdGF0ZSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlN0YXRlLmNvdW50IFVwZGF0ZWRcIilcbn0sIHsgZGVlcDogdHJ1ZSB9KVxuXG4vKipcbiAqIE1vZGlmeSB0aGUgY29kZSBzbyB0aGF0IHdlIGNhbiBtYWtlIHRoZSB3YXRjaCBjYWxsYmFjayB0cmlnZ2VyLlxuKi9cbnN0YXRlLnZhbHVlLmNvdW50ID0gMlxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAge3sgc3RhdGUuY291bnQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImluZGV4LnRlc3QudHMiOiJpbXBvcnQgeyBtb3VudCB9IGZyb20gXCJAdnVlL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgZGVzY3JpYmUsIGl0LCBleHBlY3QsIHZpIH0gZnJvbSBcInZpdGVzdFwiXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiXG5cbmRlc2NyaWJlKFwic2hhbGxvd1JlZlwiLCAoKSA9PiB7XG4gIGl0KFwic2hvdWxkIHdvcmtcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNweSA9IHZpLnNweU9uKGNvbnNvbGUsIFwibG9nXCIpXG4gICAgbW91bnQoQXBwKVxuICAgIGV4cGVjdChzcHkpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxufSlcbiJ9LCJ0aXRsZSI6Iua1heWxgiByZWYiLCJkZXNjcmlwdGlvbiI6Iua1heWxgiByZWYiLCJ0ZW1wbGF0ZSI6Im5vZGUifQ==" target="_blank"><img src="https://img.shields.io/badge/%E2%9A%A1-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98(%E9%80%9A%E8%BF%87%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)-1389fd?labelColor=1389fd" alt="接受挑战(通过单元测试)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


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
