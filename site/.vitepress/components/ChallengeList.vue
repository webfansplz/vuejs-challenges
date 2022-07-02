<script setup lang="ts">
import { challengesByDifficulty } from "../../meta"

console.log(challengesByDifficulty)
</script>

<template>
  <div v-for="(item,index) in challengesByDifficulty" :key="index">
    <h3>{{ index }}</h3>
    <ul>
      <li v-for="(childItem,childIndex) in item" :key="childIndex">
        <a :href="`questions/${childItem.path}/README`">
          {{ childItem.info.en.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  li {
    display: inline-flex;
  }
  li a{
    cursor: pointer;
    margin-right: 5px;
    background-color: #42b883;
    color:#fff;
    border-radius: 4px;
    display: inline-flex;
    border:1px solid transparent;
    padding:6px;
    &:hover{
      color:#e3af7c;
      background-color: #fff;
      border:1px solid #42b883;
    }
  }
}
</style>
