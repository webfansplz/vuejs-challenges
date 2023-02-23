<!--info-header-start--><h1>生命周期钩子 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Lifecycle-999" alt="#Lifecycle"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtVE1v2zAM/SucTw6WOu12K9KiW4EBBVZgwALs4otjM7FWWTIk2W4Q5L+P+rDjuOvQYjkEkUXyiXyP5D76UtdJ22B0HS11rlhtQKNpauCZ2N6kkdFpdJsKVtVSGdiDws0caiVbViAcYKNkBWlEAGk0eN2XjBe9KVm4T/uGdUlFLoU20DLN1hzhxiLGRjU4602GVaiCQTScD4ZcNsIEwyXdhjRiytKGpNHcx56YXJA1uQOZUrFpRG6YFGDkdssxnsE+FdCnlLQZb2xiH04uUnFIxXLhOSJG6MNgVfPMIH0BLAvWugMdPQHtBdsQgwEljWDR2+twoOO6MYYyucs5y58s3y4lx7n3AFi5q8DqvSSOBVJJPcLCQ/TYCw++XPh8lotRltE8GsR4q+BSPFrisJgDE78xNy9Un+rm3Y6qvNBvcAjaOFGGd2LS4+bWS+IQBkE6JgrZJZTuAzkquh77gsf33h8/2qvDHK4uL22rHNwbb5TvKM+E82vY70MVB+qGt/BNKeNzYlCbxGjifOC18jA9l3dEJoVqc9EYxkmDkQQF2rTXSAqYOeBzfaoCs2FeiBDynW0w3+Ucv2WmJE2GUQzDPkIfXP89tMPIFMizXWx1kQ3xIZpqTQPnFVDUR0qAwA5+EA7TGMcKteQtjmUi/VY+vrf6uaULUolUs3q5aqzKmyxHeHAds9rV6EGcBv3rQ6McL1x4Txs12lClXQSjnmG2C1clht7tGOfQSfUE2VpIVWWc76ArkTYF+eSOobxvBmA6LJDComZ6J/JJO9qm3zgJfqmsrt10ON3jiUKu7j7CvXMMOAFINtRQQz8eYZxcJyhhsfwtnmr2Vjd6NsT3VDx+OcFnpo2OZ7PEyK+4Uo0pd7EbIxuRdRkzoRvCjI1qZkobB3YfRv4Uuq2ILmjEk5CdsMejvrPEL4VxWhM4m9BjRhcPgjOBP0VW61JaJa/CLjkm6OtMjGLbLSq7cuyefWPdQtLQvrd2jfRfOD3OUvwU7/zVv6PB/qcpTMnUGXmZwL1Oy6cXtLzWtbJRpjxfhlO811P8HCRxm49+0eEPr0hSaA==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `组合式 API: 生命周期钩子` 来完成它。
以下是你要实现的内容 👇: 

```vue
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // 切换子组件时, 定时器将不正常工作, 让我们来修复它 . 
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=10%20-%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A10+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
