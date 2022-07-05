<!--info-header-start-->
<!--info-header-end-->


When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on or @ when listening for key events,e.g. :

```vue
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
```

For this challenges,we'll try something about it,let's go :

```vue
<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
<button @click="onClick1">A</button>

<!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
<button @click="onCtrlClick">A</button>

<!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
<button @click="onClick2">A</button>
</template>
```


<!--info-footer-start-->
<!--info-footer-end-->
