<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only triggered once when clicked many times quicky
 * And you need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/

const VDebounceClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
