import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Jan Ken Pon",
      metaTags: [
        {
          name: "description",
          content: "The home page of our example app"
        },
        {
          property: "org:description",
          content: "Home page"
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "Jan Ken Pon",
      metaTags: [
        {
          name: "description",
          content: "The home page of our example app"
        },
        {
          property: "org:description",
          content: "Home page"
        }
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
