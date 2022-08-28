import Vue from 'vue';
import VueRouter from 'vue-router';
import Exercises from '@/views/Exercises';
import ExerciseDetails from '@/views/ExerciseDetails'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Exercises' },
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises,
  },
  {
    path: '/exercises/:id',
    name: 'ExerciseDetails',
    component: ExerciseDetails
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
