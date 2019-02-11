import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StudentsComponent from '@/components/StudentsComponent';
import PokemonComponent from '@/components/PokemonComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/pokedex',
      name: 'PokemonComponent',
      component: PokemonComponent
    },
    {
      path: '/student',
      name: 'StudentsComponent',
      component: StudentsComponent
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
