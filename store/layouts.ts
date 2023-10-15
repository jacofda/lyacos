import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layouts-store',
  state: () => {
    return {
      menu: false,
    };
  },
  actions: {
    toggleMobile() {
      this.menu = !this.menu;
    },
    closeMobile() {
      // console.log('closingMobile', this.menu);
      // this.menu = false;
    },
  },
  getters: {
    isMobileOpen: (state: any) => state.menu,
  },
});
