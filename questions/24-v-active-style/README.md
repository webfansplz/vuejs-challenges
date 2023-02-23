<!--info-header-start--><h1>v-active-style <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdU8lu2zAQ/ZWBLpIMWkq6w7WDpLceeupyiQJElsc2YYoUyJEXGP73DklvXZBDDpYlzZuZ9x6f9slD1xXrHpNRMnaNlR2BQ+o7ULVeTFJy6V2lKy3bzliCPVicwwHm1rRQJdxXJb5cDgaVhgF8bTuFLWoCWiI0vSPGzaTFhuQaA+RbvUJwvcUAUdIRSMIWCLcEjVHGQrPk3eiADK+bwWaJOoCfySwWCn/U02eQvuyfZn5qpQdlpRujedqvh7DsO+0UwgT2nt/BX2I5bJzA462ANwLeCngn4L2ADwI+Cvj0dILVYQivYixrzm7ySs97zW8NkznxyKSe4XYEum+naHO/DC6txbpWvecQUEcW4zLaHGwds/JO1YT8BDDuVfjnOyXjDcB6ODd2UiWZd0mESTkPDDq8+RE1WuGOQXHR+e16GLkMnTeD64/7NFicjlJ2Nj2ILIfJ3bXYyZHt02XKfaNks+Luv2TnJ8iRNMB+H8/ywEqDjFLJqKwM0sblld5ERLoFoaOCHCfwnLLW9Jyhc87uOWjc6mjYk1TO7z1DZ+j9nKLg1QJw23HWrhLKfKJP5xYO/KlalMf0R8BpVMZ9fzhXJQKiU+GAJTHCLU2vOJzGrny5djvdXGGAs+xztLF116HlEARNGS/kJF3qxzgeYcWcLXlQKkuVTBkXkVFU5qGPN09FTcQsexbmaUR+eV6Q+eKZh/Md+Q/nM7/+d8DtiwN+sgnMAWfZeXu9qWXk6Xu5c7FA6xf5VIQVr2D5Cmr/1Xbgq/8lh99ZGJmZ" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement an active-style-directive. Lets go 👇: 

```vue
<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=24%20-%20v-active-style" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A24+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
