import { reactive, computed, onMounted, watch, nextTick } from "vue";

export function useCounter() {
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
    
      const increaseCounter = async (amount) => {
        counterData.count += amount
        await nextTick()
        console.log('counter value has updated in dom')
      }
      const decreaseCounter = (amount) => {
        counterData.count -= amount
      }

      onMounted(() => {
        console.log(appTitleRef.value.offsetWidth)
      })

      return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
      }
}