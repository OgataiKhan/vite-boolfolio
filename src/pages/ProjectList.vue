<script>
import axios from 'axios';
import ProjectCard from '../components/AppMainProject.vue';
import Loading from '../components/Loading.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      loading: false,
      currentPage: 1,
      responseData: {},
      projects: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrls: {
        projects: '/api/projects'
      }
    }
  },
  components: {
    ProjectCard,
    Loading,
  },
  methods: {
    getProjects() {
      this.loading = true;
      axios.get(this.baseUrl + this.apiUrls.projects, {
        params: {
          page: this.currentPage,
        },
      }).then(response => {
        this.responseData = response.data;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
    },
    nextPage() {
      this.currentPage++;
      this.$router.push({
        name: 'projects',
        query: { page: this.currentPage }
      });
      this.getProjects();
    },
    prevPage() {
      this.currentPage--;
      this.$router.push({
        name: 'projects',
        query: { page: this.currentPage }
      });
      this.getProjects();
    },
  },
  created() {
    this.getProjects();
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.currentPage = this.$route.query?.page ?? 1;
        this.getProjects();
      }
    )
  }
};

</script>

<template>
  <main>
    <div class="container py-4">
      <h1 class="text-center">Projects</h1>
      <Loading v-if="loading" />
      <div class="row mt-4 g-4" v-else>
        <div class="col col-12 col-md-4" v-for="project in responseData.results?.data" :key="project.id">
          <ProjectCard :project="project" />
        </div>
        <nav class="my-5">
          <ul class="d-flex justify-content-between list-unstyled">
            <li>
              <button class="btn btn-secondary" @click="prevPage"
                v-show="responseData.results?.prev_page_url">Previous</button>
            </li>
            <li>
              <button class="btn btn-info" @click="nextPage" v-show="responseData.results?.next_page_url">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<style scoped></style>