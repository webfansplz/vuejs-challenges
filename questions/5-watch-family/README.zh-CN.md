<!--info-header-start--><h1>watch 全家桶 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqFVNtu2kAQ/ZWRn2xEbdK+VIikl6hRVTVN1ETqA+ZhsQezzXpt7a4hCPHvnb0YnKi0DwjvzpnLmZmz++hT26abDqNpNNOF4q0BjaZrQTBZXeaR0Xl0lUtet40ysAeFqzFsmSnWcICVamrII3LPo1zmsmikNlA0nTRwaaHxJLH32WiUSxjB9ZoJgbJCuJjCLxekkQU62y17QtCdQjBrDBkKgi9Z8UQosQOjeFWh0sFnlOXSwWKXcAxxApdXsKdoVILUjcBUNFWcR3cDbyy9e0SFHVxxzjvdMNEhFX2RS+L/yGtsOhP7kC8Rb89QenuktPyNhfk/Ka5PRXk6vn/aMGMT2f4FNpR/CpNxX7Kn7XD/oP1IKR0m9RPp2pIO5YC6tzpiAUP0/s7u3RSu+8JvRKfXQD3isnpFc8M1pxyObsgHKPAnrjzDnqO/CySpFn/LKJG/sk32LOnuLEcfxRMIpAh+muV7m3CW+b2mLaaDwboVVBadAGYl37gP+mzDB8B+H1b4cAi2rDfOWlsdySJwstI4OtnqX7vMMp9ilg0SR+OIyxKfU4PapEaT9o76qn3mXlofSVvkqs2bznBBWhxIsURLbEnt4bT9+NzS1o1pAgNh0iy08doMbiT33ppmQfsesOpkYXgjKa5gu9h4CUxBdvUSVeK7r+htUBIkbuGeonCNcayQBrLB04jAPiG9hIJ1DCEgzQjAToo6lVMXPAdaVy+eG0ZrJXZ59GLo3BBAr5tOlLBt1JM1M72TxQDjV8NQiboTVLcmcclqvqBFmC9OgLA7dLvh6UrGMR168DCY5WoDpS0tuwV9SE3z4GBxQt+K13HiyHg69t8NL6auhjPbMm5CPy8mE/sY2ms/qvjbw92P1Cfmq51tFKVLEkrzGV8b531RZ14zehp6+1nZDzBz/0bB18fb7/dMsUqxdv1FYI3SLI7IhefnhkW/6PAHUjwP7g==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: watch` 来完成它。
以下是你要实现的内容 👇: 

```vue
<script setup lang="ts">
import { ref, watch } from "vue"

const count = ref(0)

/**
 * 挑战 1: Watch 一次
 * 确保副作用函数只执行一次
*/
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * 挑战 2: Watch 对象
 * 确保副作用函数被正确触发
*/
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * 挑战 3: 副作用函数刷新时机
 * 确保正确访问到更新后的`eleRef`值
*/

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
})
age.value = 18

</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=5%20-%20watch%20%E5%85%A8%E5%AE%B6%E6%A1%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A5+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
