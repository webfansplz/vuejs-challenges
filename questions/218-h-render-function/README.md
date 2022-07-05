<!--info-header-start-->
<!--info-header-end-->


For this challenge, you need use `h` render function to implement a component. 

Note: you should make sure that the props are passed correctly、event is triggered normally and slot content rendering is normal. let’s go.

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
