<!--info-header-start--><h1>functional component <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNptUctOwzAQ/JVRLrQVJMAxSipQuRRxgiPmYNJtY+Gso8RpK1X9d9YxfRw4JZ6Z3dnZPSTPbZtuB0rypOirzrQePfmhhdW8KW98fzNXrNg0res8DuhojSPWnWugEqlTSaCz2UwxZlg2raWG2ENjPXDljWNtUTkp5wDno+whxTvxijr4mmBN70GxrsdksJk1U+yMry/0Sns9lj6mWNQyGl0446mBp70XH+ukp5MpV9jVxKisqX5olSqeZYorx6J/k6LFeaISkynKOQ6KjyFK1IyNS3wKCrBuKJe4r65mldyK8DbIL8SLkz38g380EiIyX5feWtaypaXk34uFLHRyPw3saWESYLOxNDFBkYOH5pu6aex8VZtutR1IOoy6v+mLLB5xPFohi2mt9iQvoAiZ7s6nCBCQB7BUSfiEU45YNLkb+wp35XmSPMURhYw/Ec/Ep8iuTJPjL1eL0Q8=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a functional component. Lets go 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=21%20-%20functional%20component" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A21+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
