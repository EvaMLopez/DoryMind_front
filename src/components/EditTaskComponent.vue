<script>
import axios from 'axios';
import Navbar from '../components/NavbarComponent.vue'

export default {
    props: ['taskId'], 

    data() {
        return {
        task: {
            id: null,
            title: '',
            description: '',
            dueDate: '',
            assignedTo: null,
            isUrgent: false,
            isCompleted: false,
        },
        users: [],
        isAdmin: false,
        };
    },
    methods: {
        async fetchTask() {
            const response = await axios.get(`/api/tasks/${this.$route.params.id}`);
            this.task = response.data;
        },
        async fetchUsers() {
            const response = await axios.get('/api/users');
            this.users = response.data;
        },
        async submitForm() {
            await axios.put(`/api/tasks/${this.task.id}`, this.task);
            this.goBack();
        },
        markTaskAsCompleted() {
            this.task.isCompleted = true;
            this.submitForm();
        },
        goBack() {
            
        },
        async deleteTask() {
        await axios.delete(`/api/tasks/${this.task.id}`);
        this.goBack();
        },
    },
    async created() {
        this.fetchTask();
        this.fetchUsers();
        this.isAdmin = this.$store.getters.isAdmin;
    },
};
</script>

<template>   
<main>
    <div class="nabvar">
      <Navbar />    
    </div>
    <div class="container_options">
        <h2>Editar tarea</h2>
        <form @submit.prevent="updateTask">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" v-model="task.title" />
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea class="form-control" id="description" v-model="task.description"></textarea>
            </div>
            <div class="form-group">
                <label for="deadline">Fecha límite</label>
                <input type="date" class="form-control" id="deadline" v-model="task.deadline" />
            </div>
            <div class="form-group">
                <label for="assignees">Asignado a</label>
                <select class="form-control" id="assignees" v-model="task.assignedUserId">
                <option v-for="user in task.assignees" :key="user.id" :value="user.id">{{ user.name }}</option>
                </select>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="urgent" v-model="task.urgent" />
                <label class="form-check-label" for="urgent">Urgente</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="completed" v-model="task.completed" />
                <label class="form-check-label" for="completed">Completado</label>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar tarea</button>
        </form>
    </div>    
</main>
</template>

