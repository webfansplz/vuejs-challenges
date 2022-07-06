<!--info-header-start-->
<!--info-header-end-->


In this challenge, you need to stop the execution of the `CLick1` event, let&#39;s start.

`` `vue
<script setup lang="ts">

const click1 = () =&gt; {{
console.log (&#39;Click1&#39;)
}

const click2 = () =&gt; {{
console.log (&#39;click2&#39;)
}

</script>

<template>
<div @click="click1()">
<div @click="click2()">
Click ME
</div>
</div>
</template>
`` `


<!--info-footer-start-->
<!--info-footer-end-->
