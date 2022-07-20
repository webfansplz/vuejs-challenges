<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the throttle delay time option. e.g `v-throttle-click:ms`
 *
*/

const VThrottleClick = {

}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-throttle-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
