import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'


export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects }
];