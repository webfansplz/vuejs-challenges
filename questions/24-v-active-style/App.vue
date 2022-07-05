<script setup lang='ts'>

import { ref, computed, watchEffect } from "vue"

/**
 * Implement the custom directive
 * Make sure the list item text color change to be red when toggle the tab
 *
 */
type Binding = [CSSStyleDeclaration, () => boolean]

const handler = (el: HTMLElement, binding: Binding) => {
  const [style, fn] = binding
  const isActive = computed(() => fn())
  
  watchEffect(() => {
    for (const [k, v] of Object.entries(style)) {
      el.style[k] = isActive.value ? v : ''
    }
  })
}

const VActiveStyle = {
  mounted(el, { value }) {
    handler(el, value)
  },
  updated(el, { value }) {
    handler(el, value)
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
