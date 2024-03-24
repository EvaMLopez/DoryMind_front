//import type { ILoggedInUser } from "@/models/ILoggedInUser"



/* import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const username = reactive({
        username: '',
        role: '',
        isAuthenticated: false
    });
    
    return { username };
}); */


// authStore.js
/* import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        token: '',
        username: '',
        role: '',
        isAuthenticated: false
    });
    
    function setToken(token) {
        state.token = token;
        // Aquí puedes agregar lógica adicional para manejar el token, como almacenarlo en el almacenamiento local
        localStorage.setItem('authToken', token);
    }

    function clearToken() {
        state.token = '';
        localStorage.removeItem('authToken');
    }

    return {
        ...state,
        setToken,
        clearToken
    };
}); */
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