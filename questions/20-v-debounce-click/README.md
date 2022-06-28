<!--info-header-start--><h1>v-debounce-click <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23Directives-999" alt="#Directives"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBjdXN0b20gZGlyZWN0aXZlXG4gKiBNYWtlIHN1cmUgdGhlIGBvbkNsaWNrYCBtZXRob2Qgb25seSB0cmlnZ2VyZWQgb25jZSB3aGVuIGNsaWNrZWQgbWFueSB0aW1lcyBxdWlja3lcbiAqIEFuZCB5b3UgbmVlZCB0byBzdXBwb3J0IHRoZSBkZWJvdW5jZSBkZWxheSB0aW1lIG9wdGlvbi4gZS5nIGB2LWRlYm91bmNlLWNsaWNrLm1zYFxuICpcbiovXG5cbmNvbnN0IFZEZWJvdW5jZUNsaWNrID0ge1xuXG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gIGNvbnNvbGUubG9nKFwiT25seSB0cmlnZ2VyZWQgb25jZSB3aGVuIGNsaWNrZWQgbWFueSB0aW1lcyBxdWlja3lcIilcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiB2LWRlYm91bmNlLWNsaWNrLjIwMD1cIm9uQ2xpY2tcIj5cbiAgICBDbGljayBvbiBpdCBtYW55IHRpbWVzIHF1aWNrbHlcbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuIn0=" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-213547?logo=vue.js&logoColor=42b883" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->


For this challenge, we're going to implement a debounced-click-directive, let's go 👇: 

```ts
<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only triggered once when clicked many times quicky
 * And you need to support the debounce delay time option. e.g. `v-debounce-click:ms`
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

```

Click the `Take the Challenge` button to start coding! Happy Hacking!
