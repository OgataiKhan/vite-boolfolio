<script>
import ProjectCard from './AppMainProject.vue';

export default {
  name: 'MainComponent',
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  }
};

</script>

<template>
 <main>
    <div class="container py-4">
      <h1 class="text-center">Projects</h1>
      <div class="row mt-4 g-4">
        <div class="col col-12 col-md-4" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>