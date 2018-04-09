import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import SampleComponent from '../components/sample-component/index.vue';
import LandingComponent from '../components/landing-page/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingComponent,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: SampleComponent,
    },
  ],
  mode: 'history',
});
