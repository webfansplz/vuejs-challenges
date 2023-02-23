<!--info-header-start--><h1>writable-computed <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdUrFu2zAQ/ZUDJ9lWJTTZAtlouxcdWqALB9PSOSUiUQR5lFMI+veSFJmoGTJkkEAe33t39+5m9lXranLIHlhjWyM1gUVyGnqhHo+ckeXsxJUc9GgIZjB4LaEdB+0IO1jgasYBOPMKnHHFVTsqSx7gFMExoIvPuxzVvbM/FPp4FiiKHRxPK7yaRO8QDhAIXNX7PVewh+/iCYH+IJwT/Qw3I0lceqwi4OfonwXBDaEVCh6RItygdT1tWDTCBeG+BKE6OMeUOXjnlfZ1yJrQay2HQwg19eqLd8FfCAfdC0J/A2g6OcWDP+rTPKe+l6Wp9X/x3PnrS1Ov3KbeKLKSSdXhc0VoqSLrh/Ji/LBKZ8O/eMc91dInR7L3Q9rMqMNQ8QVLkFQCPmtsN8xJBto6rUT5nQzNkKpOW5FQitBcRYsvwF9/NcIc+kidPYBywwVNCEUTXgNLkMglFZxlDc5KWMcfhST5t3eG/QYe0oSduhmhNRq/U9GgIqv7HQqgtfmiSLBqGkBYcOpJjTcVjtuOdlXKuqto/IbF/cdEYv9J4i5KLP4fPrb8A707Luk=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, you will need to create a writable computed ref : 

```vue
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * Make the `plusOne` writable.
 * So that we can get the result `plusOne` to be 3, and `count` to be 2.
*/

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=4%20-%20writable-computed" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A4+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
