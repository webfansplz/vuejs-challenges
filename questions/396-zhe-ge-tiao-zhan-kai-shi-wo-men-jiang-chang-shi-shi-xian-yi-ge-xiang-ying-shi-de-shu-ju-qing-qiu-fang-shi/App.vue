<script setup lang="ts">
import { ref, Ref } from 'vue'
  
/**
 * 实现一个请求的Hooks
*/
function useRequest(url: string | Ref<string>) {
	const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  /**
  	你的实现
  */
  
  return {
    data,
    error,
    loading
  }
}
  
// 这里提供了一个基准的url，您可以以这个为基准创建响应式的url
// string url
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'

// Ref<string> url
/**
  你的实现
*/

const { data, error, loading } = useRequest(baseUrl)
  
</script>

<template>
  <button v-for="i in 5" @click="id = i">{{ i }}</button>
  
  <div v-if="error">{{ error.message }}</div>
  <div v-else-if="data">
    <pre>{{ data }}</pre>
  </div>
  <div v-else-if="loading">Loading...</div>
</template>