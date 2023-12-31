import { createApp } from 'vue'
import { store } from './store/store.js';
import App from './components/App.vue'

createApp(App).use(store).mount('#app')
