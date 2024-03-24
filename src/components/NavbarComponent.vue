<script setup>

  import { ref } from 'vue';
  import axios from 'axios';

  const collapse1 = ref(false);

/*   const userLogout = async () => {
    try {
      await axios.get('http://localhost:8080/api/v1/logout', {
        withCredentials: true
      });
    } catch (error) {
      console.error('Ha ocurrido un error durante el logout: ', error);
    }
  } */

  const userLogout = async () => {
 try {
    await axios.post('http://localhost:8080/api/v1/logout', {}, {
      withCredentials: true, 
    });
    authStore.clearToken(); 
    router.push('/'); 
 } catch (error) {
    console.error('Ha ocurrido un error durante el logout: ', error);
 }
 
};

</script>

<template>
<!-- <img src="../assets/icnos/home.png" alt="home_icon" > -->
<!-- <RouterLink class="nav-link" to="/dashboard">Home</RouterLink>-->
<!-- <p class="logout"><router-link to="/login">Logout</router-link></p> -->
<div class="route">
    <RouterLink class="nav-link" to="/" @click="userLogout">Logout</RouterLink>
    <RouterLink class="nav-link" to="/dashboard">
      <img src="../assets/icnos/home.png" alt="home_icon">
    </RouterLink>
 </div>
    

</template>
<style scoped lang="scss">
.route {    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .nav-link {
        margin: 0 10px; 
        color: white;
        font-family: "Irish Grover", system-ui;    
        font-family: "Racing Sans One", sans-serif;

    }
}
    
</style>