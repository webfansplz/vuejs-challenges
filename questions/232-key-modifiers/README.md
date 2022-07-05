<!--info-header-start--><h1>Key Modifiers <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxyXG4gIDwhLS0gQWRkIGtleSBtb2RpZmllcnMgbWFkZSB0aGlzIHdpbGwgZmlyZSBldmVuIGlmIEFsdCBvciBTaGlmdCBpcyBhbHNvIHByZXNzZWQgLS0+XHJcbjxidXR0b24gQGNsaWNrPVwib25DbGljazFcIj5BPC9idXR0b24+XHJcblxyXG48IS0tIEFkZCBrZXkgbW9kaWZpZXJzIG1hZGUgdGhpcyB3aWxsIG9ubHkgZmlyZSB3aGVuIFNoaWZ0IGFuZCBubyBvdGhlciBrZXlzIGFyZSBwcmVzc2VkIC0tPlxyXG48YnV0dG9uIEBjbGljaz1cIm9uQ3RybENsaWNrXCI+QTwvYnV0dG9uPlxyXG5cclxuPCEtLSBBZGQga2V5IG1vZGlmaWVycyBtYWRlIHRoaXMgd2lsbCBvbmx5IGZpcmUgd2hlbiBubyBzeXN0ZW0gbW9kaWZpZXJzIGFyZSBwcmVzc2VkIC0tPlxyXG48YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2syXCI+QTwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzZXR1cD5cclxuICBmdW5jdGlvbiBvbkNsaWNrMSgpe1xyXG4gICAgY29uc29sZS5sb2coJ29uQ2xpY2sxJylcclxuICB9XHJcbiAgZnVuY3Rpb24gb25DdHJsQ2xpY2soKXtcclxuICAgIGNvbnNvbGUubG9nKCdvbkN0cmxDbGljaycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2syKCl7XHJcbiAgICBjb25zb2xlLmxvZygnb25DbGljazInKVxyXG4gIH1cclxuPC9zY3JpcHQ+In0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on or @ when listening for key events,e.g. :

```vue
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
```

For this challenges,we'll try something about it,let's go :

```vue
<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
<button @click="onClick1">A</button>

<!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
<button @click="onCtrlClick">A</button>

<!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
<button @click="onClick2">A</button>
</template>
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=232%20-%20Key%20Modifiers" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A232+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
