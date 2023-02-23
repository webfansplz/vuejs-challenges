<!--info-header-start--><h1>losing-reactivity <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AUtilities-999" alt="#Reactivity:Utilities"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVMFu2zAM/RVCl9moa2/XwAm6DbvtVOyoi2sznVBbEiTKbRHk30dLtuskBXYIQEPvPVKPTzmJ79aWY0CxE7VvnbIEHilY6Bv9vJeCvBQHqdVgjSM4gcOmJTUinOHozABSMFkKqaU+Bs1HRkPw+NMETVkOJ6kBWqM9y1JDCPtVIYtn0ylDd/C1mD7P+aQE8KFlO6ZlY9MH3IEOwxO6WRaSZBkFWDhiokjScHwPpy+wsQfMoqmh1BFeVfBL++AQ6C9Ch55caJmPHVhnLDpS6KEz+gtBb3yEKbdcRtG71Omap9Rpx0Ua7FzM/diy/cabqWtdJc/ZYf4gHGzPQP4CqDs1xoJLOxdcettoeGh71b7wdmZ3YqP7bzmv6p4lGbISTusYfM3/atxFjbsLjbpK7esqTVRXmzlFIZTu8K0kdqwkzzFaozKkvktOHjgoTPV0H0j1HKtNqthv9uEJC1BUAL5ZbDdMtpdpGwK9W2TWIx5vYrhKKv/Z8Qr4bbzSz4/r+hZcWc0PYkZrQndsWrwh/IkzTMYsK90BB35/uAgcx2DON09Tp/ge5k0k45l1FW6WGI3qtulc/MmkuJ5DimLbVxFj0saVn5penS+v8dU1llPNiYxryq5lOZ4f4NtMxyxns0g5DtB4CPpFm1c9lZ+ZlZfb7E/iac9Z3FTKX56XZH5gxo8PI2j6P5h+4vwP+SSZVA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
