<!--info-header-start--><h1>functional component <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVU8Fu2zAM/RVCl9pBKrc9ZknRrrt02GnDTvUOqsMkRmXJsOWkRZB/35Pk2OmWDeghSEI+8vGRT3txX9dy27GYiXlbNGXtqGXX1aSVWS8uXHtxm5vclFVtG0d7anhFB1o1tqJcoC4XPp1NJrmhCT1WteaKjSNFq84UrrRGaSosyo0PzwLsWtJ3NktuyG2YdNk64ljXUtLpTJcp7Uq3GdNL5VQovZH0sMFoPOZKxxU5fnXg0RY9LaZc0m7DhgpdFi+8lLmZZLkprAH+G4oehokWlKS0uKV9bg5eSsSExgt6QpTIqIpnkPvVbkwupgBOPXxMfLHYw5n4jwoiYubX2FthLVt+hP5XUGChyVXqs8eFQcB6rTkpPWJGpqueuUlj55NauVW6Y3QIuH76eRaPGI42x2JqrRzjH9Hca7ocTuFDRDMfXOTCf/lThlgkuQx9kTvhPELu4ohIxh8xnoFnnp2QiqkITaTj1knXwmSDkSrbYfuDle7gJZRiws6VuvUNB+iSvahnnuLUU+LXmouTyi3uH4cfSuDpY1ZmvcEj4NgqycXoz5OliOloBwIdcO3Gdhp2ss2LT6v2zRQnGILr/FV3japrOHoRlSWgxVXHfO+oHiZXWMxgwmQ/WOaPIwk69F2i7MTn5bZKpbOf+Sf0oBEvk2Cgkcw/iWuwBbSnutcaUnSZi/TpCl58D735F/S6h/bkoa1UzmGFHbbut+Pe/PnTOBAC4Q3O/Av8hPBf5Tf/Kz+jR+1U2Q8pUbdec+NJ/LMO7T823zuCj0x2Vpg/jf+Iw2/1IcyL" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
