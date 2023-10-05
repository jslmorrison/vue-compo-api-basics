<template>
  <div class="post-detail">
    <h1>Post detail</h1>
    <p>Post with id of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <div>
      <button @click="goHomein3Secs">Go home in 3 secs</button>
    </div>
    <p><RouterLink to="/posts">&lt; Go back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`ID of post is: ${ route.params.id }`);
}

const goHomein3Secs = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}
</script>