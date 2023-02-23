<!--info-header-start--><h1>ref 全家桶 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqNVN2O0zoQfpVRrpLdbkqXoyMR2j2cg3QukACJn6vNSrip05qmdmQ7WarSd2c8dtIksIKLpvZ45pv/7xT9W9dp2/Aoi5am0KK2YLhtaqiY3K7yyJo8usulONRKWziB5uUMPriP5qywouVwhlKrA+QRwuRRLnNZKGksCCmsYBWsnFG8eJZ0D4VqpA1iJ83lfA6vd6yquNxyWGTwud4wy51CLstGoh8loSFh3LKq4QmccgmAdhhZlaZpLs8EdHWF8qsB2m2GF17sQZRgdxy+kPcvIAww5wDU+isvLAKg2Vu256SlGls3FtYYTS6v5j5yVfG0Utt44Bn+gQVk8CyXPo+f3D/HZOSjZrVP5tc+rMbKkZs+2VC81y5Yn3IGsjmsuYbvrv5Lf7m7FOJJXMCCX4InLFitVkAdoaqNnIXLE/n8lZGgwO5jg3wFS6XxVGtVc22PgNEzMKrRhetgGJJhlT9hkB5gQ/bYCnOUBd4ehd2BsHj35h2md3poLLNCbinLiQaaVlUYEXqnQWVyA60o+E3LtWFP9vhSfz+gBv1gjfroY6pxqVQGi5k7rpnO4BaP536o8RXbEqY6cQ0pdrhC3lU/pDTqozxcAXzYxkelxVZIVuEsEGJKDbu+Ho8gRZiiBnXytluiEXKHBKwyauSDRrGHmGIP/RL8c4Jfzj0/IBvgxXJMCQHwBrDciJYOeKzDAY+mZhJeFZUo9sgkYX1p/W4WCdLKDUKiSm9wOgVqOONU/hbjmjCuRxjLuXe/nPuIlvNBnNEsEnLDv6VYBptag5QXaM0ea47c5vo3JbOe+A4+su75Fb4juLE3jRUVkuRAdcNdpdZ8hqM8A/6txsmf4RwOwIUz9WQZzND5/+wgqmOnk84DNQc1abkuGY58r/mJwvYLjsFlQ15w0rDJP8l9FTMY80oCqztoldgMTIkRpopTAkIzf3aGNFUZnGhZvPilXxd/oc76CZvERUzUlS7Ooz7NPJoBbhS6oVyFxcew6MQ+gTInap71LDjuRYbAxaQOxj1s8tKrxUEjbQ/ADDRyL9UjUpgZFzpJw/C9ePE37oOz9J2N/xiAupSkVv13QXEE0mdldqqpkAWV3j+RjeamqbAjxmpc8/sHTOv+4aIQVhilrUhLGcd46ZSHYBCA0roxO6cUMnLRuP9pqUb5vvn4/l3qMUV5jD1SEvKaPN53/hYzYtnR1789JH0h3C86/wAJsebM" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你将使用 `响应式 API: ref` 来完成它。
以下是你要实现的内容 👇: 

```vue
<script setup lang="ts">
import { ref, Ref, reactive } from "vue"

const initial = ref(10)
const count = ref(0)

// 挑战 1: 更新 ref
function update(value) {
  // 实现...
}

/**
 * 挑战 2: 检查`count`是否为一个 ref 对象
 * 确保以下输出为1
*/
console.log(
  // impl ? 1 : 0
)

/**
 * 挑战 3: 如果参数是一个 ref，则返回内部值，否则返回参数本身
 * 确保以下输出为true
*/
function initialCount(value: number | Ref<number>) {
  // 确保以下输出为true
  console.log(value === 10)
}

initialCount(initial)

/**
 * 挑战 4:
 * 为源响应式对象上的某个 `property` 新创建一个 `ref`。
 * 然后,`ref` 可以被传递，它会保持对其源`property`的响应式连接。
 * 确保以下输出为true
*/
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = ref() // 修改这里的实现...

// 修改引用将更新原引用
fooRef.value++
console.log(state.foo === 2)

// 修改原引用也会更新`ref`
state.foo++
console.log(fooRef.value === 3)

</script>

<template>
  <div>
    <h1>msg</h1>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=2%20-%20ref%20%E5%85%A8%E5%AE%B6%E6%A1%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A2+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->

