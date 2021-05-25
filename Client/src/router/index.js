import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Sign_up from "../views/Sign_up.vue";
import Sign_up_first from "../views/Sign_up_first.vue";
import Login from "../views/Login.vue";
import Find_court from "../views/Find_court";
import UserProfile from "../views/UserProfile";

Vue.use(Router);


const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/sign_up_first",
      name: "sign_up_first",
      component: Sign_up_first,
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: Sign_up,
    },
    {
      path: "/log_in",
      name: "log_in",
      component: Login,
    },
    {
      path: "/find_court",
      name: "find_court",
      component: Find_court,
      props: true
    },
    {
      path: "/user_profile",
      name: "user_profile",
      component: UserProfile,
      meta: { requiresAuth: true }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router;