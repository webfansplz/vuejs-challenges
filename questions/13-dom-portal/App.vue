<script setup>

const msg = "Hello World"

</script>

<template>
  <Teleport to="body">
    <!-- Renders its to a child element of the `body` -->
    <span>{{ msg }}</span>
  </Teleport>
</template>
