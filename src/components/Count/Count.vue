<template lang="">
    <div>
        <h3>Count</h3>
        {{$store.state.count}}
        <button @click="$store.dispatch('increment')">click</button>
        <button @click="$store.dispatch('doubleCount')">click2</button>
        <button @click="increment">click</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    ...mapActions([
      'increment',
      'doubleCount'
    ])
  }
}
</script>
<style lang="">
</style>
