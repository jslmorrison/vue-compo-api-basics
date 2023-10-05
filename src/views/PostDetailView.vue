<template>
  <div class="post-detail">
    <h1>Post detail</h1>
    <p>Post with id of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <p><RouterLink to="/posts">&lt; Go back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const showPostId = () => {
  alert(`ID of post is: ${ route.params.id }`);
}
</script>