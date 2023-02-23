<!--info-header-start--><h1>Next DOM update flush <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23Global%20API%3AGeneral-999" alt="#Global API:General"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqVU02P2jAQ/SsjXwgshN3rCrZbtZdKRT3s1ZeQDMEisS17DKwQ/73j2EHppdIikY+Z98Yz701u4ru15TmgeBUbXztlCTxSsG9Sq94aR3ADhwe4w8GZHqRgrBRSS10b7QlqEzTBNmKK5/k/UXQ5rkPXcUrqQ9A1KaNB6dphj5qKOdykhkQoz1UX8OkpQgHWi0W8wQJ+/tmB8qANwScSBNtUhM0SjuYCdaXhgtBXJwQfHAIdK+ILDqwWyY/4XGwXkTFvAtlAsOc3xzNxdrFOrWhvOiw70xZPeZDUWUl4pR+GA3Hk7RZeeKq71Jt1Uo414xfC3nZ8IL8BbPaBiAdmGbZS5GpSwHvdqfrEoYcSUgwEgNsti3rn0lxhnUpwdrOe1BZL5jZ45aY8leTZwIdhfeKPlr2zZ0z1tAqkOh/te0AbjL3vcQmKloBXizXfz2piuIrU5Hmm8c6M2XKdFygBxnKFFJrFWjWmXyX9pVgCu719S4YrYog/mtA1cDHuNIv5yn/qegIC6Nhv65Sm36blbZrNUnjiEUfPqjzoImUACg6+gidmtdNS8TcpxahvJZmPAVfM+dmpvmBDE/Ken9I+X1xl7bDPg7QFzzwsdEQkzYoMGXakmM+59K6i+vhLd0rjh64sDxtnllKK53iR4lEiHZJXZTueVh7YYGak+ACP4OpSqREcm25bdIwaFmpS80ttsfovUszyCZk6ivUf0vDlZF5ULP7F/S9ky3Yh" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


When you mutate a reactive state in `Vue.js`, the resulting DOM updates are not applied synchronously. 

`Vue.js` provides a utility for waiting for the next DOM update flush. Lets Go 👇: 

```vue
<script setup>
import { ref } from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
  */

  console.log(+document.getElementById("counter").textContent === 1)
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>


```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=11%20-%20Next%20DOM%20update%20flush" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A11+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
