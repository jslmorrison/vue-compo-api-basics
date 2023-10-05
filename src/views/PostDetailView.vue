<template>
  <div class="post-detail">
    <h1>Post detail</h1>
    <p>Post with id of {{ $route.params.id }}</p>
    <p><RouterLink to="/posts">&lt; Go back</RouterLink></p>
  </div>
</template>