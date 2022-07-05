<!--info-header-start--><h1>按键修饰符 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxyXG4gIDwhLS0gQWRkIGtleSBtb2RpZmllcnMgbWFkZSB0aGlzIHdpbGwgZmlyZSBldmVuIGlmIEFsdCBvciBTaGlmdCBpcyBhbHNvIHByZXNzZWQgLS0+XHJcbjxidXR0b24gQGNsaWNrPVwib25DbGljazFcIj5BPC9idXR0b24+XHJcblxyXG48IS0tIEFkZCBrZXkgbW9kaWZpZXJzIG1hZGUgdGhpcyB3aWxsIG9ubHkgZmlyZSB3aGVuIFNoaWZ0IGFuZCBubyBvdGhlciBrZXlzIGFyZSBwcmVzc2VkIC0tPlxyXG48YnV0dG9uIEBjbGljaz1cIm9uQ3RybENsaWNrXCI+QTwvYnV0dG9uPlxyXG5cclxuPCEtLSBBZGQga2V5IG1vZGlmaWVycyBtYWRlIHRoaXMgd2lsbCBvbmx5IGZpcmUgd2hlbiBubyBzeXN0ZW0gbW9kaWZpZXJzIGFyZSBwcmVzc2VkIC0tPlxyXG48YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2syXCI+QTwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzZXR1cD5cclxuICBmdW5jdGlvbiBvbkNsaWNrMSgpe1xyXG4gICAgY29uc29sZS5sb2coJ29uQ2xpY2sxJylcclxuICB9XHJcbiAgZnVuY3Rpb24gb25DdHJsQ2xpY2soKXtcclxuICAgIGNvbnNvbGUubG9nKCdvbkN0cmxDbGljaycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2syKCl7XHJcbiAgICBjb25zb2xlLmxvZygnb25DbGljazInKVxyXG4gIH1cclxuPC9zY3JpcHQ+In0=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许为 v-on 或者 @ 在监听键盘事件时添加按键修饰符：，例如：

``vue
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
````````

在这个挑战中，我们将尝试它，让我们开始吧：

```vue
<template>
  <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click="onClick1">A</button>

<!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
<button @click="onCtrlClick">A</button>

<!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
<button @click="onClick2">A</button>
</template>

```


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=232%20-%20%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A232+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
