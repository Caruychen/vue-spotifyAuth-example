import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => 
          import(/* webpackChunkName: "login" */ "../views/Login.vue")
      },
      {
        path: "/user",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "",
        redirect: "/user"
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.auth) {
      next({
        name: 'Login'
      })
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router;
