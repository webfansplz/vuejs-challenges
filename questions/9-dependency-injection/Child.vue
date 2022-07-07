<script setup lang="ts">
import { reject } from 'vue';
// Add a piece of code to make the `count` value get injected into the child component.
reject('count');
</script>

<template>
  {{ count }}
</template>
