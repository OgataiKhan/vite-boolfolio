<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'AppComponent',
  data(){
    return {
      projects: [],
      'baseUrl': 'http://127.0.0.1:8000',
      'apiUrls': {
        'projects': '/api/projects'
      }
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    getProjects(){
       axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
        console.log(response);
        this.projects = response.data.data;
       }).catch(error => {
         console.log(error);
       });
    },
  },
  created(){
    this.getProjects();
  }
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain :projects="projects" /> -->
  <router-view></router-view>
  <AppFooter />
</template>

<style scoped>

</style>
