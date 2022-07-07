<script setup lang='ts'>

import { ref, h } from "vue"

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
*/
interface Prop {
  'active-index': number,
  list: { name: string }[],
  onToggle: (index: number) => void
}
const ListComponent = (props: Prop, { attrs, emit }) => {
  const items = attrs.list.map((item, i) =>
    h(
      'li',
      {
        style: { color: i === attrs['active-index'] ? 'red':'black' },
        onClick: () => emit('toggle', i)
      },
      item.name
    )
  )

  return h('ul', null, items)
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
