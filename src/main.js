import { createApp } from 'vue';
// Import default CSS
import './scss/style.scss';
// Import Bootstrap's JS
import * as bootstrap from 'bootstrap';
// Import router
import { router } from './router.js';

import App from './App.vue';

createApp(App).use(router).mount('#app');
