<script setup>

const msg = "Hello World"

</script>

<template>
  <Teleport>
    <!-- Renders it to a child element of the `body` -->
    <span>{{ msg }}</span>
  </Teleport>
</template>
