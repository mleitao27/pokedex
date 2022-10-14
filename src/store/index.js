import { createStore } from "vuex";
import pokemon from "@/store/modules/pokemon";

export default createStore({
  modules: {
    pokemon,
  },
});
