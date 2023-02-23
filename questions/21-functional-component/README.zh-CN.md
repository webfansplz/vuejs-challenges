<!--info-header-start--><h1>函数式组件 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVU8Fu2zAM/RVCl9pBKrc9ZknRrrt02GnDTvUOqsMkRmXJsOWkRZB/35Pk2OmWDeghSEI+8vGRT3txX9dy27GYiXlbNGXtqGXX1aSVWS8uXHtxm5vclFVtG0d7anhFB1o1tqJcoC4XPp1NJrmhCT1WteaKjSNFq84UrrRGaSosyo0PzwLsWtJ3NktuyG2YdNk64ljXUtLpTJcp7Uq3GdNL5VQovZH0sMFoPOZKxxU5fnXg0RY9LaZc0m7DhgpdFi+8lLmZZLkprAH+G4oehokWlKS0uKV9bg5eSsSExgt6QpTIqIpnkPvVbkwupgBOPXxMfLHYw5n4jwoiYubX2FthLVt+hP5XUGChyVXqs8eFQcB6rTkpPWJGpqueuUlj55NauVW6Y3QIuH76eRaPGI42x2JqrRzjH9Hca7ocTuFDRDMfXOTCf/lThlgkuQx9kTvhPELu4ohIxh8xnoFnnp2QiqkITaTj1knXwmSDkSrbYfuDle7gJZRiws6VuvUNB+iSvahnnuLUU+LXmouTyi3uH4cfSuDpY1ZmvcEj4NgqycXoz5OliOloBwIdcO3Gdhp2ss2LT6v2zRQnGILr/FV3japrOHoRlSWgxVXHfO+oHiZXWMxgwmQ/WOaPIwk69F2i7MTn5bZKpbOf+Sf0oBEvk2Cgkcw/iWuwBbSnutcaUnSZi/TpCl58D735F/S6h/bkoa1UzmGFHbbut+Pe/PnTOBAC4Q3O/Av8hPBf5Tf/Kz+jR+1U2Q8pUbdec+NJ/LMO7T823zuCj0x2Vpg/jf+Iw2/1IcyL" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


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
