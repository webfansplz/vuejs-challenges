<!--info-header-start--><h1>树组件 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiXHJcbmltcG9ydCBUcmVlQ29tcG9uZW50IGZyb20gXCIuL1RyZWVDb21wb25lbnQudnVlXCJcclxuY29uc3QgdHJlZURhdGEgPSByZWYoW3tcclxuICBrZXk6ICcxJyxcclxuICB0aXRsZTogJ1BhcmVudCAxJyxcclxuICBjaGlsZHJlbjogW3tcclxuICAgIGtleTogJzEtMScsXHJcbiAgICB0aXRsZTogJ2NoaWxkIDEnLFxyXG4gIH0sIHtcclxuICAgIGtleTogJzEtMicsXHJcbiAgICB0aXRsZTogJ2NoaWxkIDInLFxyXG4gICAgY2hpbGRyZW46IFt7XHJcbiAgICAgIGtleTogJzEtMi0xJyxcclxuICAgICAgdGl0bGU6ICdncmFuZGNoaWxkIDEnLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICcxLTItMicsXHJcbiAgICAgIHRpdGxlOiAnZ3JhbmRjaGlsZCAyJyxcclxuICAgIH0sXVxyXG4gIH0sXVxyXG59LCB7XHJcbiAga2V5OiAnMicsXHJcbiAgdGl0bGU6ICdQYXJlbnQgMicsXHJcbiAgY2hpbGRyZW46IFt7XHJcbiAgICBrZXk6ICcyLTEnLFxyXG4gICAgdGl0bGU6ICdjaGlsZCAxJyxcclxuICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICBrZXk6ICcyLTEtMScsXHJcbiAgICAgIHRpdGxlOiAnZ3JhbmRjaGlsZCAxJyxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnMi0xLTInLFxyXG4gICAgICB0aXRsZTogJ2dyYW5kY2hpbGQgMicsXHJcbiAgICB9LF1cclxuICB9LCB7XHJcbiAgICBrZXk6ICcyLTInLFxyXG4gICAgdGl0bGU6ICdjaGlsZCAyJyxcclxuICB9LF1cclxufV0pXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxUcmVlQ29tcG9uZW50IDpkYXRhPVwidHJlZURhdGFcIiAvPlxyXG48L3RlbXBsYXRlPlxyXG4iLCJUcmVlQ29tcG9uZW50LnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmludGVyZmFjZSBUcmVlRGF0YSB7XHJcbiAga2V5OiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgY2hpbGRyZW46IFRyZWVEYXRhW11cclxufVxyXG4gZGVmaW5lUHJvcHM8e2RhdGE6IFRyZWVEYXRhfT4oKVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8IS0tIGRvIHNvbWV0aGluZy4uLi4gLS0+XHJcbjwvdGVtcGxhdGU+In0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你需要实现一个树组件,让我们开始吧。

```vue
<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{data: TreeData}>()
</script>

<template>
  <!-- do something.... -->
</template>
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=208%20-%20%E6%A0%91%E7%BB%84%E4%BB%B6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A208+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
