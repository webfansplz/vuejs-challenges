<!--info-header-start--><h1>计数器 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Composable%20Function-999" alt="#Composable Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNq1VE1v2kAQ/SsjXzDEtSFJL9TQfDRSKzXKpR+HuofFDGQVe71arxMi5P/e2V3bOFUEKFIOCV72zZt5bx7eepdSho8VelMvLlPFpYYSdSUhY2I9G+hyME9EIrjQqFYsRfhZ4nVRmeOd1LwQJWwTAZBz8XkKosoXqOyZbXrn2nBEoxHdjOBbLjPMUWjQ9whpkcuiZIsMYVWJ1FBa1C17QCgrhRbVXsFToR5KKlIKU509J2IUJaK7rbrhfC645iz7xbIKYQbjAAo37/QVCTPY1kMjpBk1pS81bKkPwQLgIg1gifRPIbkDNRX0WhH31hgwNV1I+BQmY6iHhiiOnKnWxFgjSWca6QQQy7klmMK2aQR1HUfSXS4qrUnQRZrx9GGWeDRC4tkrMONYTORArxfQuF2BeT5YYKV1Je70siiOegK8gGZa4ibUWOpQlxQgTptUxrbcqYGVKnJIvAvKF5WW+kOleVYmHuWphS7RGLRAMpmMxo2ktQawwFWh8Ial9zuWR24oesX6WSIxfLm7/a2YlKj2duzKKPAtLIya9DsAK59FuouaVny9RnVt/PE1U2ukXe26xV9/3H6/st7cuDzPA9A8RxOniU0TAMkAP6PIcJPBT/QROww9npxQRIzX7IlxkmM7hE1XP/HsYhKPQDaTrVN0s8te4gXgD2E2d+1Mpyc3nk3tlRY2uPbTrtQ+adzQbk3Bzmi/RwMtCQ1td+mTT82wjpUuGki4ohhcZhmN5YJCE/8Z/+2Cdxg8acDtfAfgpw3ciPgPSjhpDYPm50fjavqyvC+qbGnfHcYwu+cXcl3ufENJed5ofzgMdXFlvG5+o+OGt9tWPxyt0+cN5DDd+T66dmGnR9Odvqq6kjbw9GYCJpbmzfSu6icfj553spew0z8+mrDl6xkwaPXbXA3eUfjZ0WOe7aNr8/8m0ebPq/8B/U+big==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，我们将实现一个计数器。 👇: 


```vue
<script setup lang='ts'>

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置 
 * 4. 最小值 & 最大值 选项支持
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {

}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=17%20-%20%E8%AE%A1%E6%95%B0%E5%99%A8" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A17+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
