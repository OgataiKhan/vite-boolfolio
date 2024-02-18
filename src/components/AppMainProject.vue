<script>


export default {
  name: 'MainProjectComponent',
  data(){
    return {
      imageUrl: 'http://127.0.0.1:8000/storage/'
    }
  },
  props: {
    project: Object,
  }
};

</script>

<template>
    <div class="card">
      <img v-if="project.image_path" :src="imageUrl + project.image_path" class="card-img-top" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="btn btn-primary">View details</a>
      </div>
    </div>
</template>

<style scoped></style>