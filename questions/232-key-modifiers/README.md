<!--info-header-start--><h1>Key Modifiers <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtVE2P2jAQ/StTX3AkCF2Oq0AX9VSpPXFsesgmDrHWsSN7AosQ/73jmPBRugsrFgnF8rw38+Z57C2bN028agV7ZAmKulEZillqUw2QfBmNYF4U8CI2UJtCllJYB3VWCMBKOlhLpaCUVoBYCQ2yhLlCMBYWlSwRCJEpZ6CxwjlRwGjUJU6eW0Sj4SlXMn+Zpszo7371kLLZPBmHaIfs0DeJMFptgpJ1RUpC/UwXoA0YrIT1dJJDgBvUoFWdos8TRDLcxpG/J4wbxfjV5EJJMj47rG7L5VY2CE5g2+yPsGx1jpIy9h7zaBsiALnRzigRK7Pkgz4+iEJ4d8nvXXknRQ95J0vXzhUVkzN+Mg6NzdiQSV2I1xiFwxgdjaysG2MRtmRrqxF2UFpTQ8qeaKLJIYejFqVyKUv1AVoIn+9ZDEHiEMRrI3L6ruSRvZKe6kkHGt2SPhqP91cmAPp0PGVnE5GyIfAIpjPY+lYkEsBVplUFrI2l2RpC5jY6P8EAKIE0E1LjT7OEKRXzNf6xifZXMi41DxEATpuP4JB4y9Nk/neSjFDfYjSLDscjWltZ86jH7vYrXwlhbbOmoWszDc5yavksHkbRUXyPjEs6m7lS1GWIpYwIgZKtM3mg/P76x1deLoXlg27O6bQ7WDgK3kuOSOyvDPPqh1ZSi4XOGvIP+cC70nOupI4zhR9Pf3yQbi3j/INzb6H/lXq436xr3VyUuKOb48v5VkOTT2uIHsXA9ZPr/2z3F3+wUyI=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


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
