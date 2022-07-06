<!--info-header-start-->
<!--info-header-end-->


在这个挑战中，你需要阻点击事件的冒泡，让我们开始吧。

```vue
<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = () => {
  console.log('click2')
}

</script>

<template>
  <div @click="click1()">
   <div @click="click2()">
     click me
   </div>
  </div>
</template>
```


<!--info-footer-start-->
<!--info-footer-end-->
