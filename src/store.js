import { reactive } from "vue";

const store = reactive({
  api: {
    baseUrl: 'http://127.0.0.1:8000',
    storagePath: '/storage/',
    apiUrls: {
      projects: '/api/projects'
    },
  },
  projects: {
    currentPage: 1,
    searchKey: null,
  },
});

export default store;