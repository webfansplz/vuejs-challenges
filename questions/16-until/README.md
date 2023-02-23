<!--info-header-start--><h1>until <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Utility%20Function-999" alt="#Utility Function"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNpdU01v2zAM/SuELnVSz87QnYqk6HbrgH0A2y3OwXWYRIgtCxKVNAjy30d92DF2sA2RjxT53vNVfNW6ODkUz2JpGyM1gUVyGtpa7VcPZB9eKiU73RuCKxjcwQ12pu+gElxViUpVqumVJWh6pwhWHpMtZj5ezueVgjm8dbrFDjlLBwRGyRZ2TjUke0bNS48dzjGdSSVJ1u0MrtxhBAP13zA71a3DkPG5W/wYHtqoCIeAy1M2AGp7Uc29j1SNwdpili4IsxehMW+w8CFm4U0RGg5mDFu9DL0n2MfHcEcOnxcLvzJAfa4lpR0CcFaEmZ9C1hPVt1i0/T5mhytXK3iaQVnCj/qIYJ3BQFXvSDsCaYEMkx1XWZZRJ9aFD4RMbk3IJ4Clhtemlc1xVYlhxUqEFMDbEPDAUnN0WU6qRc4lW/woCC0VZNkQo+xdkHYU/pWV51JLnxzvab0JRugW/XTvmIOkHPBDY8Pfk5zYRvrS6JxUxh4cskWZDBkBo2JbbOtLRrJDJuUZlOve0ST1kvYKz/Cbu0jWNTPITJ/YJnfhWNG/sX7I5pAaBnVu/A4MDztklQhKViKHiQUkccIeetdu4dybo08Hf/1nE/9T8EWu5XktGan26w27a725A5IZOHqSxU5lGR8G8LSZ39E3KrSzBw8KA8eRp9edTa01Gu4XJMuYyxERrZkQxY7F5jV0JdihRu73aPgYzMOhaUVk/svgcEiiZt///PpZxFHl7uIp5QFnye+VWHvLblKvQC0/4vYPb9mBLA==" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


We always need to rely on the asynchronous return result in order to do something, and the `until` function is so useful in this scenario. Can you do it? Lets try it 👇:


```vue
<script setup lang='ts'>
import { ref } from "vue"

const count = ref(0)

/**
 * Implement the until function
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
  console.log(count.value === 3) // Make sure the output is true
}

</script>

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,en&template=0-answer.md&title=16%20-%20until" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A16+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
