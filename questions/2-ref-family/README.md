<!--info-header-start--><h1>ref family <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqNVN2O0zoQfpVRrpLdbkqXoyMR2j2cg3QukACJn6vNSrip05qmdmQ7WarSd2c8dtIksIKLpvZ45pv/7xT9W9dp2/Aoi5am0KK2YLhtaqiY3K7yyJo8usulONRKWziB5uUMPriP5qywouVwhlKrA+QRwuRRLnNZKGksCCmsYBWsnFG8eJZ0D4VqpA1iJ83lfA6vd6yquNxyWGTwud4wy51CLstGoh8loSFh3LKq4QmccgmAdhhZlaZpLs8EdHWF8qsB2m2GF17sQZRgdxy+kPcvIAww5wDU+isvLAKg2Vu256SlGls3FtYYTS6v5j5yVfG0Utt44Bn+gQVk8CyXPo+f3D/HZOSjZrVP5tc+rMbKkZs+2VC81y5Yn3IGsjmsuYbvrv5Lf7m7FOJJXMCCX4InLFitVkAdoaqNnIXLE/n8lZGgwO5jg3wFS6XxVGtVc22PgNEzMKrRhetgGJJhlT9hkB5gQ/bYCnOUBd4ehd2BsHj35h2md3poLLNCbinLiQaaVlUYEXqnQWVyA60o+E3LtWFP9vhSfz+gBv1gjfroY6pxqVQGi5k7rpnO4BaP536o8RXbEqY6cQ0pdrhC3lU/pDTqozxcAXzYxkelxVZIVuEsEGJKDbu+Ho8gRZiiBnXytluiEXKHBKwyauSDRrGHmGIP/RL8c4Jfzj0/IBvgxXJMCQHwBrDciJYOeKzDAY+mZhJeFZUo9sgkYX1p/W4WCdLKDUKiSm9wOgVqOONU/hbjmjCuRxjLuXe/nPuIlvNBnNEsEnLDv6VYBptag5QXaM0ea47c5vo3JbOe+A4+su75Fb4juLE3jRUVkuRAdcNdpdZ8hqM8A/6txsmf4RwOwIUz9WQZzND5/+wgqmOnk84DNQc1abkuGY58r/mJwvYLjsFlQ15w0rDJP8l9FTMY80oCqztoldgMTIkRpopTAkIzf3aGNFUZnGhZvPilXxd/oc76CZvERUzUlS7Ooz7NPJoBbhS6oVyFxcew6MQ+gTInap71LDjuRYbAxaQOxj1s8tKrxUEjbQ/ADDRyL9UjUpgZFzpJw/C9ePE37oOz9J2N/xiAupSkVv13QXEE0mdldqqpkAWV3j+RjeamqbAjxmpc8/sHTOv+4aIQVhilrUhLGcd46ZSHYBCA0roxO6cUMnLRuP9pqUb5vvn4/l3qMUV5jD1SEvKaPN53/hYzYtnR1789JH0h3C86/wAJsebM" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you'll use `Reactivity API: ref` to solve the problem at hand. 
Here's what you need to implement 👇: 

```vue
<script setup lang="ts">
import { ref, Ref, reactive } from "vue"

const initial = ref(10)
const count = ref(0)

// Challenge 1: Update ref
function update(value) {
  // impl...
}

/**
 * Challenge 2: Checks if `count` is a ref object.
 * Make the output to be 1
*/
console.log(
  // impl ? 1 : 0
)

/**
 * Challenge 3: Unwrap ref
 * Make the output to be true
*/
function initialCount(value: number | Ref<number>) {
  // Make the output to be true
  console.log(value === 10)
}

initialCount(initial)

/**
 * Challenge 4:
 * create a ref for a property on a source reactive object.
 * The created ref is synced with its source property:
 * mutating the source property will update the ref, and vice-versa.
 * Make the output to be true
*/
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = ref() // change the impl...

// mutating the ref updates the original
fooRef.value++
console.log(state.foo === 2)

// mutating the original also updates the ref
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=2%20-%20ref%20family" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A2+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
