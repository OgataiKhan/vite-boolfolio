<script>


export default {
  name: 'MainProjectComponent',
  props: {
    project: Object,
  }
};

</script>

<template>
    <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</template>

<style scoped></style>