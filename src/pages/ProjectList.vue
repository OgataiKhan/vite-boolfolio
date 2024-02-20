<script>
import axios from 'axios';
import ProjectCard from '../components/AppMainProject.vue';
import Loading from '../components/Loading.vue';
import store from '../store';
import ProjectSearch from '../components/ProjectSearch.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      store,
      loading: false, 
      responseData: {},
      errors: null,
      projects: [],
    }
  },
  components: {
    ProjectCard,
    Loading,
    ProjectSearch,
  },
  methods: {
    getProjects() {
      this.errors = null;
      this.loading = true;
      axios.get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
        params: {
          page: this.store.projects.currentPage,
          key: this.store.projects.searchKey,
        },
      }).then(response => {
        this.responseData = response.data;
      }).catch(error => {
        console.log(error);
        this.responseData.results.data = [];
        this.errors = error.response.data.message;
      }).finally(() => {
        this.loading = false;
      });
    },
    nextPage() {
      this.store.projects.currentPage++;
      this.$router.push({
        name: 'projects',
        query: { page: this.store.projects.currentPage, key: this.store.projects.searchKey }
      });
      this.getProjects();
    },
    prevPage() {
      this.store.projects.currentPage--;
      this.$router.push({
        name: 'projects',
        query: { page: this.store.projects.currentPage, key: this.store.projects.searchKey }
      });
      this.getProjects();
    },
  },
  created() {
    // Initial setup
    this.store.projects.currentPage = this.$route.query?.page ?? 1;
    this.store.projects.searchKey = this.$route.query?.key ?? null;
    // Initial fetch
    this.getProjects();
    // Watcher
    this.$watch(
      () => this.$route.query,
      (toParams, previousParams) => {
        this.store.projects.currentPage = toParams.page ?? 1;
        this.store.projects.searchKey = toParams.key ?? null;
        this.getProjects();
      }
    );
  },
};

</script>

<template>
  <main>
    <div class="container py-4">
      <h1 class="text-center">Projects</h1>
      <ProjectSearch @search-project="getProjects" />
      <div v-if="errors" class="alert alert-warning" role="alert">
        {{ errors }}
      </div>
      <!-- Loader -->
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