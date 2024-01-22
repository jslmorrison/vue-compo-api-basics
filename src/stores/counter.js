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
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
