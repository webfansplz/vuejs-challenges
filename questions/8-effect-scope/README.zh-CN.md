<!--info-header-start--><h1>Effect作用域 API <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdU02P2jAQ/Ssjq4dQpcku4oRg1W3VQ3toV9reMBIhmQRrEzvyByxC/PeOYwfSPaDY8/H85s3jwp77Pjs6ZEu2MqUWvQWD1vXQFrJZc2YNZ09ciq5X2sIFNNYplKrrncUqhVNhy0P8/KhrLC1codaqA84IlTMuuSyVNJaanLSoYe0xksfZGK+U27dYUXyETZIZrJ/GhuxYtA7hM8yphcs8B2cQ7AFhh8OLr6XqcQfPLz/BKuiKtyFLNSFtwFjVU6pBCmsoas9ij0I2YLVoGtT0upIlevhhkiRySmFkIo1qMWtVM6YCqxlRmsx+I34v3333Uyzh0+W/xuvOt3oJpjOuYe6DtIC/okPlRsALl/BBjjUsuLwOGKs8LI7WRBeLXd8WFukGsKrEcTjQsY8HgMvlJvr1GrN5SK/y0LHKJzgsZUJW+J5ZNDazhrxy80PnWd13/pWWTq3GfnFWtOSdiXUq9Dz3mIKwKeB7T4qlcBQTxwjfGkwT28ieYzbLo1dDQe1kaYWShNsW58QGxZYgXbdHPQuiafKyliDxBC+EIgwmiUbazhHvyoK3/Kh4zKYQAUliAC80KcVJhTBDwllY+WA+zkanDHjCUtoclGsrOCn95tOFOctyUuP36d1Pz7mWWBuyomw2W1rsZnsviDai6FFktUwSuozFUzA/qQfKemcOvmigHYj777CmhPSL9+JUCPrrDco9Pjw8xHBYSvLr9c/vLDwi6rOXhKBns8yqb/gxuRkJcBatPvfzLtJ7YEGBULX1ro9y0o9d/wHncIQ6" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6IkFwcC52dWUiLCJmaWxlcyI6eyJwYWNrYWdlLmpzb24iOiJ7XCJzY3JpcHRzXCI6e1widGVzdFwiOlwidml0ZXN0IC0tZW52aXJvbm1lbnQganNkb21cIixcInRlc3Q6dWlcIjpcInZpdGVzdCAtLWVudmlyb25tZW50IGpzZG9tIC0tdWlcIixcImRldlwiOlwidml0ZVwiLFwiaW5pdFwiOlwiY29uY3VycmVudGx5IFxcXCJucG0gcnVuIGRldlxcXCIgXFxcIm5wbSBydW4gdGVzdFxcXCIgXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biBpbml0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widnVlXCI6XCJeMy4yLjM3XCJ9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiQHR5cGVzL2pzZG9tXCI6XCJeMTYuMi4xNFwiLFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6XCJeMi4zLjNcIixcIkB2aXRlc3QvdWlcIjpcIl4wLjE3LjBcIixcIkB2dWUvdGVzdC11dGlsc1wiOlwiXjIuMC4yXCIsXCJqc2RvbVwiOlwiXjIwLjAuMFwiLFwidml0ZVwiOlwiXjIuOS4xM1wiLFwidHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlLXBsdWdpbi12dWUtaW5zcGVjdG9yXCI6XCIxLjAuMVwiLFwidml0ZXN0XCI6XCJeMC4xNy4wXCIsXCJjb25jdXJyZW50bHlcIjpcIl43LjIuMlwifX0iLCJ2aXRlLmNvbmZpZy50cyI6IlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgSW5zcGVjdG9yKHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJ1xuICAgIH0pLFxuICBdLFxufSk7XG4iLCJtYWluLnRzIjoiXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKVxuIiwiaW5kZXguaHRtbCI6IlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgIDx0aXRsZT5WaXRlIEFwcDwvdGl0bGU+XG4gIDwvaGVhZD5cbiAgPGJvZHk+XG4gICAgPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4vbWFpbi50c1wiPjwvc2NyaXB0PlxuICA8L2JvZHk+XG48L2h0bWw+XG4iLCJlbnYuZC50cyI6IlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmRlY2xhcmUgbW9kdWxlICcqLnZ1ZScge1xuICBpbXBvcnQgdHlwZSB7IERlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNvbnN0IGNvbXBvbmVudDogRGVmaW5lQ29tcG9uZW50PHt9LCB7fSwgYW55PjtcbiAgZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xufVxuIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2F0Y2hFZmZlY3QgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgY291bnRlciA9IHJlZigxKVxuY29uc3QgZG91YmxlZCA9IGNvbXB1dGVkKCgpID0+IGNvdW50ZXIudmFsdWUgKiAyKVxuXG4vLyB1c2UgdGhlIGBlZmZlY3RTY29wZWAgQVBJIHRvIG1ha2UgdGhlc2UgZWZmZWN0cyBzdG9wIHRvZ2V0aGVyIGFmdGVyIGJlaW5nIHRyaWdnZXJlZCBvbmNlXG5cbndhdGNoKGRvdWJsZWQsICgpID0+IGNvbnNvbGUubG9nKGRvdWJsZWQudmFsdWUpKVxud2F0Y2hFZmZlY3QoKCkgPT4gY29uc29sZS5sb2coYENvdW50OiAke2RvdWJsZWQudmFsdWV9YCkpXG5cbmNvdW50ZXIudmFsdWUgPSAyXG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICBjb3VudGVyLnZhbHVlID0gNFxufSlcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIHt7IGRvdWJsZWQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImluZGV4LnRlc3QudHMiOiJpbXBvcnQgeyBtb3VudCB9IGZyb20gXCJAdnVlL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgZGVzY3JpYmUsIGl0LCBleHBlY3QsIHZpIH0gZnJvbSBcInZpdGVzdFwiXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiXG5cbmZ1bmN0aW9uIGRlbGF5KHRpbWVvdXQ6IG51bWJlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpXG4gIH0pXG59XG5cbmRlc2NyaWJlKFwiRWZmZWN0U2NvcGVcIiwgKCkgPT4ge1xuICBpdChcInNob3VsZCB3b3JrXCIsIGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxuICAgIGNvbnNvbGUubG9nID0gdmkuZm4oKGxvZzogc3RyaW5nKSA9PiB7XG4gICAgICByZXN1bHQucHVzaChsb2cpXG4gICAgfSlcbiAgICBtb3VudChBcHApXG4gICAgYXdhaXQgZGVsYXkoMTAwMClcbiAgICBleHBlY3QoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkudG9CZShKU09OLnN0cmluZ2lmeShbXG4gICAgICBcIkNvdW50OiAyXCIsIDQsIFwiQ291bnQ6IDRcIixcbiAgICBdKSlcbiAgfSlcbn0pXG4ifSwidGl0bGUiOiJFZmZlY3TkvZznlKjln58gQVBJIiwiZGVzY3JpcHRpb24iOiJFZmZlY3TkvZznlKjln58gQVBJIiwidGVtcGxhdGUiOiJub2RlIn0=" target="_blank"><img src="https://img.shields.io/badge/%E2%9A%A1-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98(%E9%80%9A%E8%BF%87%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)-1389fd?labelColor=1389fd" alt="接受挑战(通过单元测试)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: effectScope` 来完成它。
以下是你要实现的内容 👇: 

```vue
<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 `effectScope` API 使这些Effect效果在触发一次后停止

watch(doubled, () => console.log(doubled.value))
watchEffect(() => console.log("Count: ", doubled.value))

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>


```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=8%20-%20Effect%E4%BD%9C%E7%94%A8%E5%9F%9F%20API" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A8+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
