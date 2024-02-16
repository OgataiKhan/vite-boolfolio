<script>


export default {
  name: 'MainComponent',
  props: {
    projects: Object,
  }
};

</script>

<template>
  <main>
    <div class="container py-4">
      <h1 class="text-center">Projects</h1>
      <div class="row mt-4 g-4">
        <div class="col col-md-4" v-for="project in projects">
          <div class="card">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>