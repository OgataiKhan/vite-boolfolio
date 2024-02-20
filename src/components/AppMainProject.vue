<script>
import store from '../store';

export default {
  name: 'MainProjectComponent',
  data(){
    return {
      store,
    }
  },
  props: {
    project: Object,
  }
};

</script>

<template>
    <div class="card">
      <img v-if="project.image_path" :src="this.store.api.baseUrl + this.store.api.storagePath + project.image_path" class="card-img-top" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">See more</router-link>
      </div>
    </div>
</template>

<style scoped></style>