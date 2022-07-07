<!--info-header-start--><h1>函数式组件 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNptUctOwzAQ/JVRLrQVJMAxSipQuRRxgiPmYNJtY+Gso8RpK1X9d9YxfRw4JZ6Z3dnZPSTPbZtuB0rypOirzrQePfmhhdW8KW98fzNXrNg0res8DuhojSPWnWugEqlTSaCz2UwxZlg2raWG2ENjPXDljWNtUTkp5wDno+whxTvxijr4mmBN70GxrsdksJk1U+yMry/0Sns9lj6mWNQyGl0446mBp70XH+ukp5MpV9jVxKisqX5olSqeZYorx6J/k6LFeaISkynKOQ6KjyFK1IyNS3wKCrBuKJe4r65mldyK8DbIL8SLkz38g380EiIyX5feWtaypaXk34uFLHRyPw3saWESYLOxNDFBkYOH5pu6aex8VZtutR1IOoy6v+mLLB5xPFohi2mt9iQvoAiZ7s6nCBCQB7BUSfiEU45YNLkb+wp35XmSPMURhYw/Ec/Ep8iuTJPjL1eL0Q8=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，我们将尝试实现一个函数式组件，让我们开始吧 👇:

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
*/
const ListComponent = () => {
}

const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}

</script>

<template>
  <list-component
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=21%20-%20%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A21+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
