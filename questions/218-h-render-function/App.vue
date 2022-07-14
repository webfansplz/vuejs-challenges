<script setup lang="ts">
import MyButton from "./MyButton"

const onClick = () => {
  console.log("onClick")
}

</script>

<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>
