<script setup lang="ts">
import MyButton from "./MyButton.ts"

const myDoubleClick = () => {
  console.log('myDoubleClick')
}

</script>

<template>
  <MyButton disabled @myDoubleClick="myDoubleClick">
    this is my button
  </MyButton>
</template>