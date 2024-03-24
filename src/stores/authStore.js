import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedInUser: {
      username: '',
      role: '',
      isAuthenticated: false,
    },
  }),
  actions: {
    login(user) {
      this.loggedInUser.username = user.username;
      this.loggedInUser.role = user.role;
      this.loggedInUser.isAuthenticated = true;
    },
    logout() {
      this.loggedInUser.username = '';
      this.loggedInUser.role = '';
      this.loggedInUser.isAuthenticated = false;
    },
  },
  getters: {
    getLoggedInUser: (state) => state.loggedInUser,
  },
});