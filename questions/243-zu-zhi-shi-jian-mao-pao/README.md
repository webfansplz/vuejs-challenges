<!--info-header-start-->
<!--info-header-end-->


In this challenge,you should make the click event's propagation to be stopped,let's go 👇: 


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
