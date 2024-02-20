<script>
import store from '../store';

export default {
  name: 'ProjectSearch',
  data() {
    return {
      store,
    };
  },
  emits: ['searchProject'],
  methods: {
    search() {
      this.$emit('searchProject');
    },
  },
};

</script>

<template>
  <section id="project-search" class="mb-3">
    <form action="" @submit.prevent="search" class="d-flex">
      <div class="form-floating flex-grow-1">
        <input v-model="store.projects.searchKey" type="text" class="form-control" id="search-key"
          placeholder="Search projects">
        <label for="search-key">Search projects</label>
      </div>
      <button class="btn btn-primary ms-3">Search</button>
    </form>
  </section>
</template>

<style scoped></style>