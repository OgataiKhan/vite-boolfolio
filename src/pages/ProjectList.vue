<script>
import axios from 'axios';
import ProjectCard from '../components/AppMainProject.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [],
      'baseUrl': 'http://127.0.0.1:8000',
      'apiUrls': {
        'projects': '/api/projects'
      }
    }
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {
      axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
        console.log(response);
        this.projects = response.data.data;
      }).catch(error => {
        console.log(error);
      });
    },
  },
  created() {
    this.getProjects();
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