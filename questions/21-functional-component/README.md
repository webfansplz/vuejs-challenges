<!--info-header-start--><h1>functional component <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIlxuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgOlxuICogMS4gUmVuZGVyIGxpc3QgZWxlbWVudHMgKHVsL2xpKSB3aXRoIGxpc3QgZGF0YVxuICogMi4gQ2hhbmdlIHRoZSBsaXN0IGl0ZW0gdGV4dCBjb2xvciB0byBiZSByZWQgd2hlbiBjbGljayBpdC5cbiovXG5jb25zdCBMaXN0Q29tcG9uZW50ID0gKCkgPT4ge1xufVxuXG5jb25zdCBsaXN0ID0gW3tcbiAgbmFtZTogXCJKb2huXCIsXG59LCB7XG4gIG5hbWU6IFwiRG9lXCIsXG59LCB7XG4gIG5hbWU6IFwiU21pdGhcIixcbn1dXG5cbmNvbnN0IGFjdGl2ZUluZGV4ID0gcmVmKDApXG5cbmZ1bmN0aW9uIHRvZ2dsZShpbmRleDogbnVtYmVyKSB7XG4gIGFjdGl2ZUluZGV4LnZhbHVlID0gaW5kZXhcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGxpc3QtY29tcG9uZW50XG4gICAgOmxpc3Q9XCJsaXN0XCJcbiAgICA6YWN0aXZlLWluZGV4PVwiYWN0aXZlSW5kZXhcIlxuICAgIEB0b2dnbGU9XCJ0b2dnbGVcIlxuICAvPlxuPC90ZW1wbGF0ZT5cbiJ9" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a functional component, let's go 👇: 

```ts
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the functional component :
 * 1. Render list elements (ul/li) with list data
 * 2. Change the list item text color to be red when click it.
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
