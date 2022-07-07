<!--info-header-start--><h1>响应性丟失 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AUtilities-999" alt="#Reactivity:Utilities"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVMFu2zAM/RVCl9moa2/XwAm6DbvtVOyoi2sznVBbEiTKXRHk30dLtuskBXowQEGPj+Tjk0/iu7XlGFDsRO1bpyyBRwoW+kY/76UgL8VBajVY4whO4LBpSY0IZzg6M4AUnCyF1FIfg+YroyF4/GmCpiyHk9QArdGeaakhhP3KkMW76ZahO/haTMdzPjEBvHPZjtOysekD7kCH4QndTAuJsowETBwxkSRxOJ7D6QtsrAEzaSoodYRXFfzSPjgE+ovQoScXWs7HDqwzFh0p9NAZ/YWgNz7ClFuGUfQmdRrzlCrtOEiNnYu5Hku232gzVa2rpDkrzAfCwfYM5BNA3akxBhzaOeDQ20bDQ9ur9oW3M6sTC91/y3lV90zJkDXhtLbBY37KcRc57i446iqVr6vUUV1t+hSFYDWUfn5chSiJxSvJs6NW1wyphcUyD+wZZvF0H0j17LCNwVh6luQJC1BUAP6z2G4yuQCnbRLozSJnPeLxxpErpfIfXa+A31cDLLiymt/GjNaE7ti0eJPwJ/YwabRsdwfs/f3hwnvsiNnq3E2dnHyYl5J2wFlXPmeK0ahua9RFn0yK6z6kKLZ1FTEmLV/5qejV/fIwX11j2eBszrim7JqWnfoOvrV3tHU2k5TjAI2HoF+0edVT+JFYebl9BhN52nMWN5WsmOclmR+Y8TvECJp+DdMnzv8BhO6d7A==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6Imxvc2luZ1JlYWN0aXZpdHkudGVzdC50cyIsImZpbGVzIjp7InBhY2thZ2UuanNvbiI6IntcInNjcmlwdHNcIjp7XCJ0ZXN0XCI6XCJ2aXRlc3QgLS1lbnZpcm9ubWVudCBqc2RvbSAtLXVpXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biB0ZXN0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlc3RcIjpcIl4wLjE3LjBcIixcInZ1ZVwiOlwiXjMuMi4zN1wiLFwidml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvclwiOlwiMS4wLjFcIixcIkB0eXBlcy9qc2RvbVwiOlwiXjE2LjIuMTRcIixcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOlwiXjIuMy4zXCIsXCJAdml0ZXN0L3VpXCI6XCJeMC4xNy4wXCIsXCJAdnVlL3Rlc3QtdXRpbHNcIjpcIl4yLjAuMlwiLFwianNkb21cIjpcIl4yMC4wLjBcIn19Iiwidml0ZXN0LmNvbmZpZy50cyI6IlxuICAgICAgICBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiXG4gICAgICAgIGltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICAgICAgICBwbHVnaW5zOiBbdnVlKCldLFxuICAgICAgICB9KVxuICAgICAgIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gXCJ2dWVcIlxuXG5mdW5jdGlvbiB1c2VDb3VudCgpIHtcbiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7XG4gICAgY291bnQ6IDAsXG4gIH0pXG5cbiAgZnVuY3Rpb24gdXBkYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdGF0ZS5jb3VudCA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGRlc3RydWN0dXJlZCBwcm9wZXJ0aWVzIGRvbid0IGxvc2UgdGhlaXIgcmVhY3Rpdml0eVxuY29uc3QgeyBzdGF0ZTogeyBjb3VudCB9LCB1cGRhdGUgfSA9IHVzZUNvdW50KClcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIDxzcGFuIEBjbGljaz1cInVwZGF0ZShjb3VudC0xKVwiPi08L3NwYW4+XG4gICAgICB7eyBjb3VudCB9fVxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50KzEpXCI+Kzwvc3Bhbj5cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImxvc2luZ1JlYWN0aXZpdHkudGVzdC50cyI6ImltcG9ydCB7IG1vdW50IH0gZnJvbSBcIkB2dWUvdGVzdC11dGlsc1wiXG5pbXBvcnQgeyBkZXNjcmliZSwgaXQsIGV4cGVjdCB9IGZyb20gXCJ2aXRlc3RcIlxuaW1wb3J0IHR5cGUgeyBSZWYgfSBmcm9tIFwidnVlXCJcbmltcG9ydCB7IGlzUmVmIH0gZnJvbSBcInZ1ZVwiXG5cbmltcG9ydCBMb3NpbmdSZWFjdGl2aXR5IGZyb20gXCIuL0FwcC52dWVcIlxuXG5pbnRlcmZhY2UgTG9zaW5nUmVhY3Rpdml0eVR5cGUge1xuICB1c2VDb3VudDogKCkgPT4ge1xuICAgIHN0YXRlOiB7Y291bnQ6IFJlZjxudW1iZXI+fVxuICAgIHVwZGF0ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRcbiAgfVxufVxuXG5kZXNjcmliZShcIkxvc2luZ1JlYWN0aXZpdHlcIiwgKCkgPT4ge1xuICBpdChcImNvdW50IGlzIFJlZlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KExvc2luZ1JlYWN0aXZpdHkpXG4gICAgY29uc3QgeyBzdGF0ZTogeyBjb3VudCB9IH0gPSAod3JhcHBlci52bSBhcyB1bmtub3duIGFzIExvc2luZ1JlYWN0aXZpdHlUeXBlKS51c2VDb3VudCgpXG4gICAgZXhwZWN0KGlzUmVmKGNvdW50KSkudG9CZSh0cnVlKVxuICB9KVxufSlcbiJ9LCJ0aXRsZSI6IuWTjeW6lOaAp+S4n+WksSIsImRlc2NyaXB0aW9uIjoi5ZON5bqU5oCn5Lif5aSxIiwidGVtcGxhdGUiOiJub2RlIiwiZGVwZW5kZW5jaWVzIjp7InR5cGVzY3JpcHQiOiJeNC43LjQiLCJ2aXRlc3QiOiJeMC4xNy4wIiwidnVlIjoiXjMuMi4zNyIsIkB0eXBlcy9qc2RvbSI6Il4xNi4yLjE0IiwiQHZpdGVqcy9wbHVnaW4tdnVlIjoiXjIuMy4zIiwiQHZpdGVzdC91aSI6Il4wLjE3LjAiLCJAdnVlL3Rlc3QtdXRpbHMiOiJeMi4wLjIiLCJqc2RvbSI6Il4yMC4wLjAifX0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98(%E9%80%9A%E8%BF%87%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)-1389fd" alt="接受挑战(通过单元测试)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在 `JavaScript` 中，我们经常解构/扩展对象。

在`Vue.js`中，我们同样解构/扩展“响应式”对象，但它会失去响应性。

如何保证解构/扩展不丢失响应性 ? 让我们开始吧 ！

```vue
<script setup lang="ts">
import { reactive } from "vue"

function useCount() {
  const state = reactive({
    count: 0,
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state,
    update,
  }
}

// 确保解构不丢失响应性
const { state: { count }, update } = useCount()

</script>

<template>
  <div>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=3%20-%20%E5%93%8D%E5%BA%94%E6%80%A7%E4%B8%9F%E5%A4%B1" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A3+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
