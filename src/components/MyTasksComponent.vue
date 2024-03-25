<script setup>
import Navbar from '../components/NavbarComponent.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const backendBaseUrl = 'http://localhost:8080/api/v1';

const authStore = useAuthStore();

const tasks = ref([]);

const isLoading = ref(true);

const errorMessage = ref('');

onMounted(async () => {
  if (authStore.getLoggedInUser.isAuthenticated) {
    try {
      const response = await axios.get(`${backendBaseUrl}/tasks/my-tasks`);

      tasks.value = response.data;

      isLoading.value = false;

    } catch (e) {
      errorMessage.value = e.toString();
      isLoading.value = false;
    }
  }
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// estado de la tarea
/* function getTaskIcon(task) {
  return task.isCompleted ? '/src/assets/icnos/completed.png' : '/src/assets/icnos/pending.png';
} */

function getTaskIcon(task) {
  if (task.isCompleted) {
    return '/src/assets/icnos/completed.png';
  } else {
    return '/src/assets/icnos/pending.png';
  }
}

const editTask = (taskId) => {

};

const viewTask = (taskId) => {

};

const toggleTaskState = (task) => {

};
</script>

<template>
  <main>
    <div class="nabvar">
      <Navbar />    
    </div>
    <div class="container_options">
      <h2>Mis Tareas</h2>
      <div v-for="(task, index) in tasks" :key="index" class="task-item">
        <p>{{ task.title }}</p>
        <p> {{ formatDate(task.deadline) }}</p>
        <div class="task-icons">
          <RouterLink class="nav-link" to="/edit-tasks"><img src="../assets/icnos/edit.png" alt="Editar" @click="editTask(task.id)"></RouterLink>
          //<img v-bind:src="getTaskIcon(task)" alt="Estado" @click="toggleTaskState(task)">
          <img :src="getTaskIcon(task)" alt="Estado" @click="toggleTaskState(task)">
          <img src="../assets/icnos/view.png" alt="Ver" @click="viewTask(task.id)">          
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h2 {
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
}

.task-format {
  border: 2px solid #3B3B38; 
  background-color: rgba(28, 115, 218, 0.5);  
  border-radius: 0.3rem;

}
.task-item {
  border-bottom: 1px solid gray;  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #3B3B38; 
  background-color: rgba(28, 115, 218, 0.5);  
  border-radius: 0.3rem;
  font-family: "Irish Grover", system-ui;            
  width: 100%;    
  height: 2rem; 
  font-size: 16px;
  padding: 0.3rem;
  margin: 0.5rem auto;
}

.task-icons {
  display: flex;
  align-items: center;
}

.task-icons img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
