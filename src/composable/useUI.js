import { computed } from "vue";
import { useStore } from "vuex";

export const useUI = () => {
  const store = useStore();

  return {
    //SideMenu Options

    //sideMenuOpen: computed(() => store.getters["Ui/isSideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["Ui/isSideMenuOpen"];
      },
      set(val) {
        store.commit("Ui/toggleSideMenu");
      },
    }),

    toggleSideMenu() {
      store.commit("Ui/toggleSideMenu");
    },
  };
};

export default useUI;
