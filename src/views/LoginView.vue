<script>
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
        const response = await fetch('http://localhost:8080/api/v1/employee');
        if (!response.ok) {
          alert(`HTTP error! status: ${response.status}`);
        } else {
          const employees = await response.json();
          const employee = employees.find(emp => emp.name === this.username && emp.password === this.password);
          if (employee) {
            this.router.push('/incidence'); 
          } else {
            alert("Usuario o contraseña incorrecta intentelo de nuevo por favor");
          }
        }
      } catch (error) {
        alert(`Fetch error: ${error}`);
      }
    }
  }
}
</script>

<template>
      <h1>BIENVENIDO</h1>
  <div class="login-box">
    <input type="text" placeholder="Usuario" v-model="username">
    <input type="password" placeholder="Contraseña" v-model="password">
    <button class="btn-login" @click="login">Login</button>
  </div>
</template>

<style lang="scss">
h1 {
  text-align: center;
  margin-top: 1rem;
  font-size: 2em;
  margin: 3rem 0;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 20rem;
  margin: 0 auto;
  margin-bottom: 11.4rem;
  padding: 40px;
  background-color: #EC4646;
  input {
    margin-bottom: 20px;
    width: 23rem;  
    height: 3rem; 
    font-size: 16px;
    text-align: center;

    @media (max-width: 600px) {
      width: 80%; 
    }
  }
  .btn-login {
    cursor: pointer;
    width: 10rem;
    height: 40px; 
    font-size: 16px;  
  }

  @media (max-width: 600px) {
    width: 20rem;  
    height: 15rem;
  }
}
</style>
