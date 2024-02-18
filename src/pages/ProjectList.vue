<script>
import axios from 'axios';
import ProjectCard from '../components/AppMainProject.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      currentPage: 1,
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
      axios.get(this.baseUrl + this.apiUrls.projects, {
        params: {
          page: this.currentPage,
        },
      }).then(response => {
        console.log(response);
        this.projects = response.data.results.data;
      }).catch(error => {
        console.log(error);
      });
    },
    nextPage() {
      this.currentPage++;
      this.getProjects();
    },
    prevPage() {
      this.currentPage--;
      this.getProjects();
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
      <nav class="my-5">
        <ul class="d-flex justify-content-between list-unstyled">
          <li class="btn btn-secondary" @click="prevPage">Previous</li>
          <li class="btn btn-info" @click="nextPage">Next</li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style scoped></style>