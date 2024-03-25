<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const tasks = ref([]);

onMounted(async () => {
try {
    const response = await fetch('http://localhost:8080/api/v1/tasks');
    if (!response.ok) {
    alert(`HTTP error! status: ${response.status}`);
    } else {
    tasks.value = await response.json();
    }
} catch (error) {
    alert(`Fetch error: ${error}`);
}
});

const createTask = () => {
router.push('/new-task');
};

const editTask = (id) => {
router.push({ name: 'editTask', params: { id: id } });
};

const deleteTask = async (id) => {
try {
    const response = await fetch(`http://localhost:8080/api/v1/tasks/${id}`, {
    method: 'DELETE',
    });
    if (!response.ok) {
    alert(`HTTP error! status: ${response.status}`);
    } else {
    tasks.value = tasks.value.filter(task => tasks.idTask!== id);
    }
} catch (error) {
    alert(`Fetch error: ${error}`);
}
};

const viewTask = (id) => {
router.push({ name: 'taskView', params: { id: id } });
};
</script>

<template>
    <div class="tasks">
      <h1>LISTA DE INCIDENCIAS</h1>
 
      <div class="tasks" v-for="task in tasks" :key="task.idTask">
        <h2>{{ task.titleTask }}</h2>
        <div class="icons">
          <img src="../assets/icnos/edit.png" alt="Editar" @click="editTask(task.idTask)">
          <img src="../assets/icnos/pending.png" alt="Estado" @click="checkTask(task.idTask)">   
          <img src="../assets/icnos/view.png" alt="Ver" @click="viewTask(task.idTask)">
        </div>
      </div>
    </div>   
  </template>  
  
  <style lang="scss" scoped>
  .incidencias {
    width: 100%;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    padding-bottom: 7rem;
    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #343a40;
    }
    button {
      display: block;
      margin: 0 auto 20px;
      padding: 10px 20px;
      background-color: #EC4646;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #ce1919;
      }
    }
    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      margin-bottom: 10px;
      border: 1px solid #ced4da; 
      border-radius: 4px;
      h2 {
        margin: 0;
        color: #495057;
      }
      .icons {
        display: flex;
        img {
          cursor: pointer;
          width: 90px;
          height: 40px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
    @media (max-width: 600px) {

      button {
      padding: 20px 40px;
      font-size: 1.2em;
    }
      .task {
        .icons {
          img {
            width: 60px;
            height: 30px;
            &:not(:last-child) {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  </style>