<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
<button @click="onClick1">A</button>

<!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
<button @click="onCtrlClick">A</button>

<!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
<button @click="onClick2">A</button>
</template>

<script setup>
  function onClick1(){
    console.log('onClick1')
  }
  function onCtrlClick(){
    console.log('onCtrlClick')
  }
  function onClick2(){
    console.log('onClick2')
  }
</script>