<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <button @click="decreaseCounter(2)" class="btn">--</button>
    <button @click="decreaseCounter(1)" class="btn">-</button>
    <span class="counter">{{ counterData.count }}</span>
    <button @click="increaseCounter(1)" class="btn">+</button>
    <button @click="increaseCounter(2)" class="btn">++</button>

    <p>Current count is: {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>

</template>

<script setup>
import { computed, reactive, watch } from 'vue'

  const appTitle = 'My counter app'
  const counterData = reactive({
    count: 0,
    title: 'Count'
  })

  watch(() => counterData.count, (newCount) => {
    console.log('watching count', newCount);
    if (newCount === 20) {
      alert('Counter counts 20!')
    }
  })

  const oddOrEven = computed(() => {
    return (counterData.count % 2 === 0) ? 'even' : 'odd'
  })

  const increaseCounter = (amount) => {
    counterData.count += amount
  }
  const decreaseCounter = (amount) => {
    counterData.count -= amount
  }
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>