<!--info-header-start-->
<!--info-header-end-->

在这个挑战中，你需要使用`h`渲染函数来实现一个组件。

请注意: 你应该确保参数被正确传递、事件被正常触发和插槽内容正常渲染。让我们开始吧。

```vue
<script setup lang="ts">
import MyButton from "./MyButton.ts"
const onClick = () => {
  console.log('onClick')
}
</script>
<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>
```


<!--info-footer-start-->
<!--info-footer-end-->
