<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <button @click="decreaseCounter(2)" class="btn">--</button>
    <button @click="decreaseCounter(1)" class="btn">-</button>
    <span class="counter">{{ counterData.count }}</span>
    <button @click="increaseCounter(1)" class="btn">+</button>
    <button @click="increaseCounter(2)" class="btn">++</button>

    <p>Current count is: {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-autofocus v-model="counterData.title" type="text" />
    </div>
  </div>

</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'
import { ref, onBeforeMount, onMounted } from 'vue';

  const appTitle = 'My counter app'
  const appTitleRef = ref(null)

  onBeforeMount(() => {
    console.log('onBeforeMount related to title')
  })

  onMounted(() => {
    console.log(appTitleRef.value.offsetWidth)
  })

  const {
    counterData,
    increaseCounter,
    decreaseCounter,
    oddOrEven
  } = useCounter()

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