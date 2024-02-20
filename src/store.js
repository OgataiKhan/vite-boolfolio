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
    searchKey: null,
  },
});

export default store;