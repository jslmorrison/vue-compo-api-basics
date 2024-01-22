import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 10,
    title: 'my counter title'
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
