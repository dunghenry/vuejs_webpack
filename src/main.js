import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes';
import store from './store';
const app = createApp(App);
app.use(routes);
app.use(store);
app.mount('#app');
