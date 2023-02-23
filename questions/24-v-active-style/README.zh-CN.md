<!--info-header-start--><h1>激活的样式-指令 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdU8lu2zAQ/ZWBLpIMWkq6w7WDpLceeupyiQJElsc2YYoUyJEXGP73DklvXZBDDpYlzZuZ9x6f9slD1xXrHpNRMnaNlR2BQ+o7ULVeTFJy6V2lKy3bzliCPVicwwHm1rRQJdxXJb5cDgaVhgF8bTuFLWoCWiI0vSPGzaTFhuQaA+RbvUJwvcUAUdIRSMIWCLcEjVHGQrPk3eiADK+bwWaJOoCfySwWCn/U02eQvuyfZn5qpQdlpRujedqvh7DsO+0UwgT2nt/BX2I5bJzA462ANwLeCngn4L2ADwI+Cvj0dILVYQivYixrzm7ySs97zW8NkznxyKSe4XYEum+naHO/DC6txbpWvecQUEcW4zLaHGwds/JO1YT8BDDuVfjnOyXjDcB6ODd2UiWZd0mESTkPDDq8+RE1WuGOQXHR+e16GLkMnTeD64/7NFicjlJ2Nj2ILIfJ3bXYyZHt02XKfaNks+Luv2TnJ8iRNMB+H8/ywEqDjFLJqKwM0sblld5ERLoFoaOCHCfwnLLW9Jyhc87uOWjc6mjYk1TO7z1DZ+j9nKLg1QJw23HWrhLKfKJP5xYO/KlalMf0R8BpVMZ9fzhXJQKiU+GAJTHCLU2vOJzGrny5djvdXGGAs+xztLF116HlEARNGS/kJF3qxzgeYcWcLXlQKkuVTBkXkVFU5qGPN09FTcQsexbmaUR+eV6Q+eKZh/Md+Q/nM7/+d8DtiwN+sgnMAWfZeXu9qWXk6Xu5c7FA6xf5VIQVr2D5Cmr/1Xbgq/8lh99ZGJmZ" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->




在这个挑战中，我们将实现一个"激活的样式"指令，让我们开始吧 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 * 
*/
const VActiveStyle = {

}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=24%20-%20%E6%BF%80%E6%B4%BB%E7%9A%84%E6%A0%B7%E5%BC%8F-%E6%8C%87%E4%BB%A4" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A24+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
