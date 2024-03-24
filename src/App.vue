<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';
</script>

<template>
 <div id="app">
  <Header />   
  <RouterView />
  <Footer />
 </div>
</template>

<style>

/* body {
  background-image: url('../assets/images/Dory_back.png');
  background-size: cover;
  background-repeat: no-repeat;
}
 */
</style>
