<script setup>
import EditTask from '../components/EditTaskComponent.vue'
</script>

<template>

    <RouterView />
    <EditTask :taskId="this.$route.params.id" />

</template>

<style lang="scss">

body {    
    background-image: url('../assets/images/Dory_back.png');
    background-size: cover;
    background-repeat: no-repeat;

    .container_options {
        text-align: center;
        background-color: rgba(244, 244, 234, 0.8); 
        width: 90%;
        height: 40rem;    
        padding: 1rem;
        margin: 1rem auto;
        
        button {           
            margin-bottom: 2rem;
            font-size: 16px;
            text-align: center;
            border-radius: 0.5rem;
            font-family: "Irish Grover", system-ui;            
            width: 100%;    
            height: 2rem; 
            font-size: 16px;
            border: 2px solid #8F0881;            
            background-color: rgba(209, 218, 28, 0.6);
            cursor: none;
        }
    }
}
</style>