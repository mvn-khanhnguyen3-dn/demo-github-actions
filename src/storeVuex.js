import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    doubleCount(state) {
      state.count--;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    doubleCount(context) {
      context.commit("doubleCount");
    },
  },
});
