<!--info-header-start--><h1>losing-reactivity <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AUtilities-999" alt="#Reactivity:Utilities"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVMFu2zAM/RVCl9moa2/XwAm6DbvtVOyoi2sznVBbEiTKbRHk30dLtuskBXYIQEPvPVKPTzmJ79aWY0CxE7VvnbIEHilY6Bv9vJeCvBQHqdVgjSM4gcOmJTUinOHozABSMFkKqaU+Bs1HRkPw+NMETVkOJ6kBWqM9y1JDCPtVIYtn0ylDd/C1mD7P+aQE8KFlO6ZlY9MH3IEOwxO6WRaSZBkFWDhiokjScHwPpy+wsQfMoqmh1BFeVfBL++AQ6C9Ch55caJmPHVhnLDpS6KEz+gtBb3yEKbdcRtG71Omap9Rpx0Ua7FzM/diy/cabqWtdJc/ZYf4gHGzPQP4CqDs1xoJLOxdcettoeGh71b7wdmZ3YqP7bzmv6p4lGbISTusYfM3/atxFjbsLjbpK7esqTVRXmzlFIZTu8K0kdqwkzzFaozKkvktOHjgoTPV0H0j1HKtNqthv9uEJC1BUAL5ZbDdMtpdpGwK9W2TWIx5vYrhKKv/Z8Qr4bbzSz4/r+hZcWc0PYkZrQndsWrwh/IkzTMYsK90BB35/uAgcx2DON09Tp/ge5k0k45l1FW6WGI3qtulc/MmkuJ5DimLbVxFj0saVn5penS+v8dU1llPNiYxryq5lOZ4f4NtMxyxns0g5DtB4CPpFm1c9lZ+ZlZfb7E/iac9Z3FTKX56XZH5gxo8PI2j6P5h+4vwP+SSZVA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="https://vuejs-challenges-stackblitz.netlify.app/#eyJvcGVuRmlsZSI6IkFwcC52dWUiLCJmaWxlcyI6eyJwYWNrYWdlLmpzb24iOiJ7XCJzY3JpcHRzXCI6e1widGVzdFwiOlwidml0ZXN0IC0tZW52aXJvbm1lbnQganNkb21cIixcInRlc3Q6dWlcIjpcInZpdGVzdCAtLWVudmlyb25tZW50IGpzZG9tIC0tdWlcIixcImRldlwiOlwidml0ZVwiLFwiaW5pdFwiOlwiY29uY3VycmVudGx5IFxcXCJucG0gcnVuIGRldlxcXCIgXFxcIm5wbSBydW4gdGVzdFxcXCIgXCJ9LFwic3RhY2tibGl0elwiOntcInN0YXJ0Q29tbWFuZFwiOlwibnBtIHJ1biBpbml0XCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1widnVlXCI6XCJeMy4yLjM3XCJ9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiQHR5cGVzL2pzZG9tXCI6XCJeMTYuMi4xNFwiLFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6XCJeMi4zLjNcIixcIkB2aXRlc3QvdWlcIjpcIl4wLjE3LjBcIixcIkB2dWUvdGVzdC11dGlsc1wiOlwiXjIuMC4yXCIsXCJqc2RvbVwiOlwiXjIwLjAuMFwiLFwidml0ZVwiOlwiXjIuOS4xM1wiLFwidHlwZXNjcmlwdFwiOlwiXjQuNy40XCIsXCJ2aXRlLXBsdWdpbi12dWUtaW5zcGVjdG9yXCI6XCIxLjAuMVwiLFwidml0ZXN0XCI6XCJeMC4xNy4wXCIsXCJjb25jdXJyZW50bHlcIjpcIl43LjIuMlwifX0iLCJ2aXRlLmNvbmZpZy50cyI6IlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgSW5zcGVjdG9yKHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJ1xuICAgIH0pLFxuICBdLFxufSk7XG4iLCJtYWluLnRzIjoiXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKVxuIiwiaW5kZXguaHRtbCI6IlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgIDx0aXRsZT5WaXRlIEFwcDwvdGl0bGU+XG4gIDwvaGVhZD5cbiAgPGJvZHk+XG4gICAgPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4vbWFpbi50c1wiPjwvc2NyaXB0PlxuICA8L2JvZHk+XG48L2h0bWw+XG4iLCJlbnYuZC50cyI6IlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmRlY2xhcmUgbW9kdWxlICcqLnZ1ZScge1xuICBpbXBvcnQgdHlwZSB7IERlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNvbnN0IGNvbXBvbmVudDogRGVmaW5lQ29tcG9uZW50PHt9LCB7fSwgYW55PjtcbiAgZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xufVxuIiwiQXBwLnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gXCJ2dWVcIlxuXG5mdW5jdGlvbiB1c2VDb3VudCgpIHtcbiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7XG4gICAgY291bnQ6IDAsXG4gIH0pXG5cbiAgZnVuY3Rpb24gdXBkYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdGF0ZS5jb3VudCA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGRlc3RydWN0dXJlZCBwcm9wZXJ0aWVzIGRvbid0IGxvc2UgdGhlaXIgcmVhY3Rpdml0eVxuY29uc3QgeyBzdGF0ZTogeyBjb3VudCB9LCB1cGRhdGUgfSA9IHVzZUNvdW50KClcblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIDxzcGFuIEBjbGljaz1cInVwZGF0ZShjb3VudC0xKVwiPi08L3NwYW4+XG4gICAgICB7eyBjb3VudCB9fVxuICAgICAgPHNwYW4gQGNsaWNrPVwidXBkYXRlKGNvdW50KzEpXCI+Kzwvc3Bhbj5cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImluZGV4LnRlc3QudHMiOiJpbXBvcnQgeyBtb3VudCB9IGZyb20gXCJAdnVlL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgZGVzY3JpYmUsIGl0LCBleHBlY3QgfSBmcm9tIFwidml0ZXN0XCJcbmltcG9ydCB0eXBlIHsgUmVmIH0gZnJvbSBcInZ1ZVwiXG5pbXBvcnQgeyBpc1JlZiB9IGZyb20gXCJ2dWVcIlxuXG5pbXBvcnQgTG9zaW5nUmVhY3Rpdml0eSBmcm9tIFwiLi9BcHAudnVlXCJcblxuaW50ZXJmYWNlIExvc2luZ1JlYWN0aXZpdHlUeXBlIHtcbiAgdXNlQ291bnQ6ICgpID0+IHtcbiAgICBzdGF0ZToge2NvdW50OiBSZWY8bnVtYmVyPn1cbiAgICB1cGRhdGU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJMb3NpbmdSZWFjdGl2aXR5XCIsICgpID0+IHtcbiAgaXQoXCJjb3VudCBpcyBSZWZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChMb3NpbmdSZWFjdGl2aXR5KVxuICAgIGNvbnN0IHsgc3RhdGU6IHsgY291bnQgfSB9ID0gKHdyYXBwZXIudm0gYXMgdW5rbm93biBhcyBMb3NpbmdSZWFjdGl2aXR5VHlwZSkudXNlQ291bnQoKVxuICAgIGV4cGVjdChpc1JlZihjb3VudCkpLnRvQmUodHJ1ZSlcbiAgfSlcbn0pXG4ifSwidGl0bGUiOiJsb3NpbmctcmVhY3Rpdml0eSIsImRlc2NyaXB0aW9uIjoibG9zaW5nLXJlYWN0aXZpdHkiLCJ0ZW1wbGF0ZSI6Im5vZGUifQ==" target="_blank"><img src="https://img.shields.io/badge/%E2%9A%A1-Take%20the%20Challenge(Passed%20unit%20tests)-1389fd?labelColor=1389fd" alt="Take the Challenge(Passed unit tests)"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


In `JavaScript`, we always destructure/spread objects.

In `Vue.js`, we can also destructure/spread the `reactive` objects, but they will end up losing their reactivity.

How can we make sure that the destructured properties maintain their reactivity? Go ! 


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

// Ensure the destructured properties don't lose their reactivity
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=3%20-%20losing-reactivity" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A3+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
