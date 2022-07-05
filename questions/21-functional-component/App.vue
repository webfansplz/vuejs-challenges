<script setup lang='ts'>

import { ref, h } from "vue"

/**
 * Implement the functional component :
 * 1. Render list elements (ul/li) with list data
 * 2. Change the list item text color to be red when click it.
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
