<!-- <script setup>
import Navbar from '../components/NavbarComponent.vue'
</script>

<template>
    <body>        
        <main>
            <div class="nabvar">
                <Navbar />    
            </div>
            <div class="container_options">
                <button>Mis tareas</button>                
            </div>            
        </main>
    </body>
</template>

<style lang="scss">
button{
    cursor: none;
}
</style>
    -->



<!-- <script setup>
import { reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';

const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.getLoggedInUser.isAuthenticated);

const myTasks = reactive({
  items: [],
  isLoading: false,
  errorMessage: '',
});

const getMyTasks = async () => {
  try {
    myTasks.isLoading = true;
    const jwtToken = authStore.getLoggedInUser.token;
    if (!jwtToken) {
      throw new Error('No se encuentra el token de autorización');
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    const { data } = await axios.get('http://localhost:8080/api/v1/tasks/my-tasks');

    myTasks.items = data;
  } catch ( error ) {
    myTasks.errorMessage = error.toString();
  } finally {
    myTasks.isLoading = false;
  }
};

if (isLoggedIn.value) {
  getMyTasks();
}
</script>

<template>
  <div>
    <h2>Mis tareas del grupo</h2>
 
    <div v-if="!myTasks.isLoading">
      <ul>
        <li v-for="(task, index) in myTasks.items" :key="index">
          {{ task.title }}
          <span> - {{ task.description }}</span>

        </li>
      </ul>
    </div>

    
    <div v-else-if="myTasks.errorMessage">{{ myTasks.errorMessage }}</div>

   
    <div v-else>
      Cargando tareas...
    </div>
  </div>
</template>
 -->



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

// Función para obtener el icono de estado de la tarea
/* function getTaskIcon(task) {
  return task.isCompleted ? '/src/assets/icnos/completed.png' : '/src/assets/icnos/pending.png';
} */

// Función para obtener el icono de estado de la tarea
function getTaskIcon(task) {
  if (task.isCompleted) {
    return '/src/assets/icnos/completed.png';
  } else {
    return '/src/assets/icnos/pending.png';
  }
}

// Función para editar una tarea
const editTask = (taskId) => {
  // Implementa la lógica para editar una tarea,
  // como redireccionar a otra vista con un formulario
};

// Función para ver una tarea
const viewTask = (taskId) => {
  // Implementa la lógica para ver una tarea
  // como redireccionar a otra vista con los detalles
};

// Función para cambiar el estado de una tarea
const toggleTaskState = (task) => {
  // Implementa la lógica para cambiar el estado de una tarea
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
          <img v-bind:src="getTaskIcon(task)" alt="Estado" @click="toggleTaskState(task)">
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
