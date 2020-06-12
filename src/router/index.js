import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import Modal from "../views/Modal.vue";
import Htp from "../views/Htp.vue";
import Move from "../views/Move.vue";
import Find from "../views/Find.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/htp",
    name: "Htp",
    component: Htp,
  },
  {
    path: "/move",
    name: "Move",
    component: Move,
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
