import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import SampleComponent from '../components/sample-component/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello World',
      component: HelloWorld,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: SampleComponent,
    },
  ],
  mode: 'history',
});
