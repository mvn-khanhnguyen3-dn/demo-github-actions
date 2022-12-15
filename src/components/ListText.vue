<script setup>
import DeleteText from "./DeleteText.vue";
import UpdateText from './UpdateText.vue';
import { store } from "../store.js";
</script>
<template v-cloak>
  <div class="list-text">
    <form v-on:submit.prevent="onEnter()">
      <input
        ref="input"
        class="form-input"
        v-model="store.value"
        placeholder="add text"
      />
      <button class="btn btn-update" v-if="store.status === 'Update'">
        {{ store.status }}
      </button>
      <button class="btn btn-add" v-else>{{ store.status }}</button>
    </form>
    <TransitionGroup name="list" tag="ul">
      <li v-for="text in store.listText" :key="text.id">
        <router-link :to="{ path: 'user/' + text.name }">{{text.name}}</router-link>
        <div class="btn-group">
          <DeleteText :id="text.id" :handleDeleteProps="handleDelete" />
          <UpdateText :id="text.id" :handleUpdateProps="handleUpdate" />
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  components: {
    DeleteText,
    UpdateText,
  },
  methods: {
    handleDelete(id) {
      store.handleDelete(id);
    },
    handleUpdate(id) {
      store.handleUpdate(id);
    },
    onEnter() {
      store.onEnter();
    },
  },
};
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
