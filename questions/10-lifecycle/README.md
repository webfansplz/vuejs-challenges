<!--info-header-start--><h1>Lifecycle Hooks <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Lifecycle-999" alt="#Lifecycle"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtVE1v2zAM/SucTw6WOu12K9KiW4EBBVZgwALs4otjM7FWWTIk2W4Q5L+P+rDjuOvQYjkEkUXyiXyP5D76UtdJ22B0HS11rlhtQKNpauCZ2N6kkdFpdJsKVtVSGdiDws0caiVbViAcYKNkBWlEAGk0eN2XjBe9KVm4T/uGdUlFLoU20DLN1hzhxiLGRjU4602GVaiCQTScD4ZcNsIEwyXdhjRiytKGpNHcx56YXJA1uQOZUrFpRG6YFGDkdssxnsE+FdCnlLQZb2xiH04uUnFIxXLhOSJG6MNgVfPMIH0BLAvWugMdPQHtBdsQgwEljWDR2+twoOO6MYYyucs5y58s3y4lx7n3AFi5q8DqvSSOBVJJPcLCQ/TYCw++XPh8lotRltE8GsR4q+BSPFrisJgDE78xNy9Un+rm3Y6qvNBvcAjaOFGGd2LS4+bWS+IQBkE6JgrZJZTuAzkquh77gsf33h8/2qvDHK4uL22rHNwbb5TvKM+E82vY70MVB+qGt/BNKeNzYlCbxGjifOC18jA9l3dEJoVqc9EYxkmDkQQF2rTXSAqYOeBzfaoCs2FeiBDynW0w3+Ucv2WmJE2GUQzDPkIfXP89tMPIFMizXWx1kQ3xIZpqTQPnFVDUR0qAwA5+EA7TGMcKteQtjmUi/VY+vrf6uaULUolUs3q5aqzKmyxHeHAds9rV6EGcBv3rQ6McL1x4Txs12lClXQSjnmG2C1clht7tGOfQSfUE2VpIVWWc76ArkTYF+eSOobxvBmA6LJDComZ6J/JJO9qm3zgJfqmsrt10ON3jiUKu7j7CvXMMOAFINtRQQz8eYZxcJyhhsfwtnmr2Vjd6NsT3VDx+OcFnpo2OZ7PEyK+4Uo0pd7EbIxuRdRkzoRvCjI1qZkobB3YfRv4Uuq2ILmjEk5CdsMejvrPEL4VxWhM4m9BjRhcPgjOBP0VW61JaJa/CLjkm6OtMjGLbLSq7cuyefWPdQtLQvrd2jfRfOD3OUvwU7/zVv6PB/qcpTMnUGXmZwL1Oy6cXtLzWtbJRpjxfhlO811P8HCRxm49+0eEPr0hSaA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use the `Composition API: Lifecycle Hooks` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // The timer will work abnormally when the child component is toggled. Lets fix it.
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=10%20-%20Lifecycle%20Hooks" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A10+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
