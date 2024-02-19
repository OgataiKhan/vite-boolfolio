<script>
import axios from 'axios';

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: {},
      baseUrl: 'http://127.0.0.1:8000',
      imageUrl: 'http://127.0.0.1:8000/storage/',
      apiUrls: {
        projects: '/api/projects'
      }
    }
  },
  methods: {
    getProject() {
      axios.get(this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug
      ).then(response => {
        this.project = response.data.result;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created() {
    this.getProject();
  },
};

</script>

<template>
  <main>
    <div class="container">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <img v-if="project.image_path" :src="imageUrl + project.image_path" class="card-img-top" :alt="project.title">
      <p v-if="project.url"><a :href="project.url">Link to project</a></p>
      <p>
        <button class="btn btn-primary">
          <router-link :to="{ name: 'projects' }" class="nav-link">Back to Projects</router-link>
        </button>
      </p>
    </div>
  </main>
</template>

<style scoped></style>