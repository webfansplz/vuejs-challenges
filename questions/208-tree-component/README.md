<!--info-header-start--><h1>Tree Component <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23Components-999" alt="#Components"/></h1><blockquote><p>By 木荣 <a href="https://github.com/murongg" target="_blank">@murongg</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiXHJcbmltcG9ydCBUcmVlQ29tcG9uZW50IGZyb20gXCIuL1RyZWVDb21wb25lbnQudnVlXCJcclxuY29uc3QgdHJlZURhdGEgPSByZWYoW3tcclxuICBrZXk6ICcxJyxcclxuICB0aXRsZTogJ1BhcmVudCAxJyxcclxuICBjaGlsZHJlbjogW3tcclxuICAgIGtleTogJzEtMScsXHJcbiAgICB0aXRsZTogJ2NoaWxkIDEnLFxyXG4gIH0sIHtcclxuICAgIGtleTogJzEtMicsXHJcbiAgICB0aXRsZTogJ2NoaWxkIDInLFxyXG4gICAgY2hpbGRyZW46IFt7XHJcbiAgICAgIGtleTogJzEtMi0xJyxcclxuICAgICAgdGl0bGU6ICdncmFuZGNoaWxkIDEnLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICcxLTItMicsXHJcbiAgICAgIHRpdGxlOiAnZ3JhbmRjaGlsZCAyJyxcclxuICAgIH0sXVxyXG4gIH0sXVxyXG59LCB7XHJcbiAga2V5OiAnMicsXHJcbiAgdGl0bGU6ICdQYXJlbnQgMicsXHJcbiAgY2hpbGRyZW46IFt7XHJcbiAgICBrZXk6ICcyLTEnLFxyXG4gICAgdGl0bGU6ICdjaGlsZCAxJyxcclxuICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICBrZXk6ICcyLTEtMScsXHJcbiAgICAgIHRpdGxlOiAnZ3JhbmRjaGlsZCAxJyxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnMi0xLTInLFxyXG4gICAgICB0aXRsZTogJ2dyYW5kY2hpbGQgMicsXHJcbiAgICB9LF1cclxuICB9LCB7XHJcbiAgICBrZXk6ICcyLTInLFxyXG4gICAgdGl0bGU6ICdjaGlsZCAyJyxcclxuICB9LF1cclxufV0pXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxUcmVlQ29tcG9uZW50IDpkYXRhPVwidHJlZURhdGFcIiAvPlxyXG48L3RlbXBsYXRlPlxyXG4iLCJUcmVlQ29tcG9uZW50LnZ1ZSI6IjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmludGVyZmFjZSBUcmVlRGF0YSB7XHJcbiAga2V5OiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgY2hpbGRyZW46IFRyZWVEYXRhW11cclxufVxyXG5kZWZpbmVQcm9wczx7ZGF0YTogVHJlZURhdGF9PigpXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDwhLS0gZG8gc29tZXRoaW5nLi4uLiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

For this challenge, you need to implement a tree component, let’s go.

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

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=208%20-%20Tree%20Component" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A208+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
