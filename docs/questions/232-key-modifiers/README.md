<!--info-header-start--><h1>Key Modifiers <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtkcFuwyAMhl/F49L2kEbrcWLRoj3CrrlkwSyoBBA4raKq7z4Ci7SqUpfDbhb+/5/P9oXVzu1PI7IXxgkHp1vCqvGNAeBPRQG1EHDECQYrlFToAwytQKBeBTgrrUEqj4AnNKAk1JrAevjolSSIilYHC85jCCigKFIw/xyJrIG3Tqvu+Nowa97n6rlhVc3L3E3KpF4FYY2eMsm5jyT5/9YIMBYs9ehne8SJghU05HUi+j+giBGmEPf7y7ESZq4OdyS8vDlWegqdV44gII3u54RyNB2pmLjseLu75A5AZ02wGvfafm03S3+zy+3rvX/ZyoOIRfIgJY3zB8Xhxs/LPFjFrt+RMe8U" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
