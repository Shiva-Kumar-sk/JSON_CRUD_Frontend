import Home from "./components/Home.vue";
import CreateItem from "./components/CreateItem.vue";
import UpdateItem from "./components/UpdateItem.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/create-item",
        name: "createItem",
        component: CreateItem,
      },
      {
        path: "/update-item/:id",
        name: "updateItem",
        component: UpdateItem,
      },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;