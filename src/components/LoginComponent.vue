<!-- <script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: '',
      router: useRouter(),  
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/login');
        if (!response.ok) {
          alert(`HTTP error! status: ${response.status}`);
        } else {
          const employees = await response.json();
          const employee = employees.find(emp => emp.name === this.username && emp.password === this.password);
          if (employee) {
            this.router.push('/dashboard'); 
          } else {
            alert("Usuario o contraseña incorrecta.");
          }
        }
      } catch (error) {
        alert(`Fetch error: ${error}`);
      }
    }
  }
}
</script> -->

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore'; 
import router from '@/router/index';

 export default {
 data() {
    return {
      username: '',
      password: '',
      isSubmitting: false,
    };
 },
 created() {
    axios.defaults.withCredentials = true;
 },
 methods: {
    async login() {
      const authStore = useAuthStore();
      try {
        this.isSubmitting = true;
        const response = await axios.get('http://localhost:8080/api/v1/login', {
          auth: {
            username: this.username,
            password: this.password,
          },
        headers: {
          'Content-Type': 'application/json',
        },
        });
        console.log(response.data);
        authStore.login({
          username: response.data.username,
          role: response.data.role,
          isAuthenticated: true,
        });

        let redirectPath = '/';
        if (authStore.getLoggedInUser.role === 'ROLE_ADMIN') {
          redirectPath = '/dashboard';
        } else if (authStore.getLoggedInUser.role === 'ROLE_USER') {
          redirectPath = '/dashboard';
        }
        router.push(redirectPath);
      } catch (error) {
          console.error('Error:', error);
          alert("Usuario o contraseña incorrecta.");
      } finally {
        this.isSubmitting = false;
      }
    },
 },
};
</script>

<template>
  <div class="login_box">
    <input type="text" placeholder="Usuario" v-model="username">
    <input type="password" placeholder="Contraseña" v-model="password">
    <button class="btn_login" @click="login">Entrar</button>
  </div>

  <div>
    <p class="register"><router-link to="/register">Regístrate</router-link></p>
  </div>

  <!-- <footer>Copyright © 2024 ​| Todos los derechos reservados</footer> -->
</template>

<style lang="scss">

body {
  background-image: url('../assets/images/Dory_back.png');
  background-size: cover;
  background-repeat: no-repeat;
  
    .login_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30rem;
      height: 20rem;
      margin: 0 auto;
      margin-bottom: 11rem;
      padding: 40px;
      
      input {
        margin-bottom: 20px;
        width: 23rem;  
        height: 3rem; 
        font-size: 16px;
        text-align: center;
        border-radius: 1rem;
        font-family: "Irish Grover", system-ui;
        border-radius: 0.7rem;
        width: 7.5rem;    
        height: 2rem; 
        font-size: 16px;
        border: 2px solid #63E1F1; 
        background-color: rgba(209, 218, 28, 0.6); 
        color: #000; 
      }
      
      .btn_login {
        font-family: "Irish Grover", system-ui;
        cursor: pointer;
        border-radius: 0.7rem;
        width: 6rem;    
        height: 2rem; 
        font-size: 16px;
        border: 2px solid #63E1F1; 
        background-color: rgba(209, 218, 28, 0.6); 
        color: #000; 
      }
      
      @media (max-width: 600px) {
        width: 20rem;  
        height: 15rem;
      }
    }    
  }

/* footer {
  color: #000;
  text-shadow: 1px 1px 0 #fff; 
  font-size: 14px;
  text-align: center;
  font-family: "Racing Sans One", sans-serif;
} */

</style>
