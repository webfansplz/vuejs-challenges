<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdU01v2zAM/SuELnVSz87QnYqk6HbrgH0A2y3OwXWYRIgtCxKVNAjy30d92DF2sA2RjxT53vNVfNW6ODkUz2JpGyM1gUVyGtpa7VcPZB9eKiU73RuCKxjcwQ12pu+gElxViUpVqumVJWh6pwhWHpMtZj5ezueVgjm8dbrFDjlLBwRGyRZ2TjUke0bNS48dzjGdSSVJ1u0MrtxhBAP13zA71a3DkPG5W/wYHtqoCIeAy1M2AGp7Uc29j1SNwdpili4IsxehMW+w8CFm4U0RGg5mDFu9DL0n2MfHcEcOnxcLvzJAfa4lpR0CcFaEmZ9C1hPVt1i0/T5mhytXK3iaQVnCj/qIYJ3BQFXvSDsCaYEMkx1XWZZRJ9aFD4RMbk3IJ4Clhtemlc1xVYlhxUqEFMDbEPDAUnN0WU6qRc4lW/woCC0VZNkQo+xdkHYU/pWV51JLnxzvab0JRugW/XTvmIOkHPBDY8Pfk5zYRvrS6JxUxh4cskWZDBkBo2JbbOtLRrJDJuUZlOve0ST1kvYKz/Cbu0jWNTPITJ/YJnfhWNG/sX7I5pAaBnVu/A4MDztklQhKViKHiQUkccIeetdu4dybo08Hf/1nE/9T8EWu5XktGan26w27a725A5IZOHqSxU5lGR8G8LSZ39E3KrSzBw8KA8eRp9edTa01Gu4XJMuYyxERrZkQxY7F5jV0JdihRu73aPgYzMOhaUVk/svgcEiiZt///PpZxFHl7uIp5QFnye+VWHvLblKvQC0/4vYPb9mBLA==" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


有些时候，我们需要依赖于异步的返回结果做一些后续处理，`until`函数在这种场景下非常有用，你能实现它吗 ? 让我们来试试吧 👇:


```vue
<script setup lang='ts'>
import { ref } from "vue"

const count = ref(0)

/**
 * 实现`until`函数
*/

function until(initial) {
  function toBe(value) {

  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // 确保输出为true
}

</script>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=16%20-%20until" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A16+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
