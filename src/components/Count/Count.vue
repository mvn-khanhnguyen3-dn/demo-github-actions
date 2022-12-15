<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <h3>Count</h3>
  {{ $store.state.count }}
  <button @click="$store.dispatch('increment')">click</button>
  <button @click="$store.dispatch('doubleCount')">click2</button>
  <button @click="increment">click</button>
</template>

<script></script>
<style lang=""></style>
