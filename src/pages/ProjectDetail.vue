<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'ProjectDetail',
  data() {
    return {
      store,
      project: {
        technologies: [],
      },
    }
  },
  methods: {
    getProject() {
      axios.get(this.store.api.baseUrl + this.store.api.apiUrls.projects + '/' + this.$route.params.slug
      ).then(response => {
        if (response.data.result) {
        this.project = response.data.result;
        } else {
          this.$router.push({ name: 'not-found' });
        }
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
      <p v-if="project.type">Project type: {{ project.type.title }}</p>
      <div v-if="project.technologies.length > 0">
        Technologies used:
        <ul>
          <li v-for="technology in project.technologies">
            {{ technology.title }}
          </li>
        </ul>
      </div>
      <img v-if="project.image_path" :src="this.store.api.baseUrl + this.store.api.storagePath + project.image_path" class="card-img-top" :alt="project.title">
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