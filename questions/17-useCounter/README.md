<!--info-header-start--><h1>useCounter <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNq1VE1v2kAQ/SsjXzDEtSFJL9TQfDRSKzXKpR+HuofFDGQVe71arxMi5P/e2V3bOFUEKFIOCV72zZt5bx7eepdSho8VelMvLlPFpYYSdSUhY2I9G+hyME9EIrjQqFYsRfhZ4nVRmeOd1LwQJWwTAZBz8XkKosoXqOyZbXrn2nBEoxHdjOBbLjPMUWjQ9whpkcuiZIsMYVWJ1FBa1C17QCgrhRbVXsFToR5KKlIKU509J2IUJaK7rbrhfC645iz7xbIKYQbjAAo37/QVCTPY1kMjpBk1pS81bKkPwQLgIg1gifRPIbkDNRX0WhH31hgwNV1I+BQmY6iHhiiOnKnWxFgjSWca6QQQy7klmMK2aQR1HUfSXS4qrUnQRZrx9GGWeDRC4tkrMONYTORArxfQuF2BeT5YYKV1Je70siiOegK8gGZa4ibUWOpQlxQgTptUxrbcqYGVKnJIvAvKF5WW+kOleVYmHuWphS7RGLRAMpmMxo2ktQawwFWh8Ial9zuWR24oesX6WSIxfLm7/a2YlKj2duzKKPAtLIya9DsAK59FuouaVny9RnVt/PE1U2ukXe26xV9/3H6/st7cuDzPA9A8RxOniU0TAMkAP6PIcJPBT/QROww9npxQRIzX7IlxkmM7hE1XP/HsYhKPQDaTrVN0s8te4gXgD2E2d+1Mpyc3nk3tlRY2uPbTrtQ+adzQbk3Bzmi/RwMtCQ1td+mTT82wjpUuGki4ohhcZhmN5YJCE/8Z/+2Cdxg8acDtfAfgpw3ciPgPSjhpDYPm50fjavqyvC+qbGnfHcYwu+cXcl3ufENJed5ofzgMdXFlvG5+o+OGt9tWPxyt0+cN5DDd+T66dmGnR9Odvqq6kjbw9GYCJpbmzfSu6icfj553spew0z8+mrDl6xkwaPXbXA3eUfjZ0WOe7aNr8/8m0ebPq/8B/U+big==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a counter. 👇: 


```vue
<script setup lang='ts'>

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * Implement the composable function
 * 1. inc (+)
 * 2. dec (-)
 * 3. reset 
 * 4. min & max opotion support
 * Make sure the function works correctly
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {

}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=17%20-%20useCounter" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A17+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
