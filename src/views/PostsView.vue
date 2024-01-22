<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <button class="counter-button" @click="counter.increaseCounter(1)">{{ counter.count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';

const posts = ref([
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
]);

const counter = useCounterStore()

</script>

<style scoped>
li {
  margin-bottom: 20px;
}
.counter-button {
  background-color: red;
  padding: 10px;
  width: 100%;
}
</style>
