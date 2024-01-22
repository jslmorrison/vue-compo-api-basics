<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}:</h3>
    <button class="btn" @click="counter.decreaseCounter(2)">--</button>
    <button class="btn" @click="counter.decreaseCounter(1)">-</button>
    <span class="counter">{{ counter.count }}</span>
    <button class="btn" @click="counter.increaseCounter(1)">+</button>
    <button class="btn" @click="counter.increaseCounter(2)">++</button>

    <p>Current count is: {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counter.title" v-autofocus type="text" />
    </div>
  </div>

</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { ref, onBeforeMount, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';

  const appTitle = 'My counter app'
  const appTitleRef = ref(null)

  const counter = useCounterStore()

  onBeforeMount(() => {
    console.log('onBeforeMount related to title')
  })

  onMounted(() => {
    console.log(appTitleRef.value.offsetWidth)
  })

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