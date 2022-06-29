<script setup lang='ts'>

import { ref } from "vue"

/**
 * Implement the functional component :
 * 1. Render list elements (ul/li) with list data
 * 2. Change the list item text color to be red when click it.
*/
const ListComponent = () => {
}

const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}

</script>

<template>
  <list-component
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>
