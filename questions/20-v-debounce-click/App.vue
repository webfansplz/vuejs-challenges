<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only triggered once when clicked many times quicky
 * And you need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/
const debounce = (handler: Function, delay: number = 200) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    clearTimeout(timer!);
    timer = setTimeout(() => {
      timer = null;
      handler.apply(args)
    }, delay)
  }
}
interface DebouncedHandler {
  (...args: any[]): void;
  (this: HTMLElement, ev: MouseEvent): any;
}
const createVDebounceClick = () => {
  let handler: DebouncedHandler | null = null
  return {
    mounted(el, { value, arg: delay }) {
      handler = debounce(value, Number.parseInt(<string>delay))
      el.addEventListener('click', handler)
    },
    unmounted(el) {
      handler && el.removeEventListener('click', handler)
      handler = null
    }
  }
}


const VDebounceClick = createVDebounceClick()

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
