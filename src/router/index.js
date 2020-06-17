import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import Modal from "../views/Modal.vue";
import Htp from "../views/Htp.vue";
import Move from "../views/Move.vue";
import Find from "../views/Find.vue";
import Research from "../views/Research.vue";
import Modall from "../components/Modall.vue";
import Game from "../views/Game.vue";
import Map from "../components/Map.vue";
import Qcm from "../views/Qcm.vue";
import Qcm2 from "../views/Qcm2.vue";
import Video from "../components/Video.vue";
import Qcm3 from "../views/Qcm3.vue";
import Slider from "../views/Slider.vue";

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
  {
    path: "/research",
    name: "Research",
    component: Research,
  },
  {
    path: "/Modall",
    name: "Modall",
    component: Modall,
  },

  {
    path: "/qcm",
    name: "Qcm",
    component: Qcm,
  },
  {
    path: "/Video",
    name: "Video",
    component: Video,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/Map",
    name: "Map",
    component: Map,
  },
  {
    path: "/qcm2",
    name: "Qcm2",
    component: Qcm2,
  },
  {
    path: "/qcm3",
    name: "Qcm3",
    component: Qcm3,
  },
  {
    path: "/Slider",
    name: "Slider",
    component: Slider,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
