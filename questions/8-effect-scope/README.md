<!--info-header-start--><h1>effectScope API <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3AAdvanced-999" alt="#Reactivity:Advanced"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdU02P2jAQ/Ssjq4dQpcku4oRg1W3VQ3toV9reMBIhmQRrEzvyByxC/PeOYwfSPaDY8/H85s3jwp77Pjs6ZEu2MqUWvQWD1vXQFrJZc2YNZ09ciq5X2sIFNNYplKrrncUqhVNhy0P8/KhrLC1codaqA84IlTMuuSyVNJaanLSoYe0xksfZGK+U27dYUXyETZIZrJ/GhuxYtA7hM8yphcs8B2cQ7AFhh8OLr6XqcQfPLz/BKuiKtyFLNSFtwFjVU6pBCmsoas9ij0I2YLVoGtT0upIlevhhkiRySmFkIo1qMWtVM6YCqxlRmsx+I34v3333Uyzh0+W/xuvOt3oJpjOuYe6DtIC/okPlRsALl/BBjjUsuLwOGKs8LI7WRBeLXd8WFukGsKrEcTjQsY8HgMvlJvr1GrN5SK/y0LHKJzgsZUJW+J5ZNDazhrxy80PnWd13/pWWTq3GfnFWtOSdiXUq9Dz3mIKwKeB7T4qlcBQTxwjfGkwT28ieYzbLo1dDQe1kaYWShNsW58QGxZYgXbdHPQuiafKyliDxBC+EIgwmiUbazhHvyoK3/Kh4zKYQAUliAC80KcVJhTBDwllY+WA+zkanDHjCUtoclGsrOCn95tOFOctyUuP36d1Pz7mWWBuyomw2W1rsZnsviDai6FFktUwSuozFUzA/qQfKemcOvmigHYj777CmhPSL9+JUCPrrDco9Pjw8xHBYSvLr9c/vLDwi6rOXhKBns8yqb/gxuRkJcBatPvfzLtJ7YEGBULX1ro9y0o9d/wHncIQ6" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: effectScope` to complete the challenge. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once

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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=8%20-%20effectScope%20API" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A8+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
