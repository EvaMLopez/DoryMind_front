<script setup>
import Navbar from '../components/NavbarComponent.vue'
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarOptions = ref({
 plugins: [dayGridPlugin],
 initialView: 'dayGridMonth',
 weekends: false,
 events: [
    { title: 'Meeting', start: new Date() }
 ],
 headerToolbar: {
    left: 'prev,next', 
    center: 'title', 
    right: ''
 }
});
</script>

<template>
    <body>        
        <main>
            <div class="nabvar">
                <Navbar />    
            </div>
            <div class="container_options">
                <RouterLink class="nav-link" to="/my-tasks"><button>Mis tareas</button></RouterLink>
                <RouterLink class="nav-link" to="/all-tasks"><button>Todas las tareas</button></RouterLink>
                <RouterLink class="nav-link" to="/new-task"><button>Añadir tarea</button></RouterLink>
                <button>Buscar</button>
                <button>Añadir miembro</button>
                <div class="calendar">
                    <FullCalendar :options="calendarOptions" />
                </div>     
            </div>            
        </main>
    </body>
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
        padding: 1rem;
        margin: 1rem auto;       
    }

    .calendar {
        width: 50%; 
        max-width: 400px; 
        margin: 0 auto; 
        font-family: "Irish Grover", system-ui;
        
        .fc-daygrid-day-top {
            padding: 1px 20px; 
            font-size: 10px;
        }

        .fc-daygrid-day {
            padding: 0; 
            font-size: 8px; 
        }
        
        .fc-header-toolbar {
            .fc-toolbar-title {
                font-size: 17px; 
                border: none;
                background-color: rgba(244, 244, 234, 0);
                color: rgb(33, 81, 212);
            }
            .fc-today-button {
                font-size: 10px; 
            }
        }

        .fc-button {
            font-size: 8px; 
        }

        @media (max-width: 600px) {        
            width: 80%; 
            max-width: none;
        }
    }
}

</style>



