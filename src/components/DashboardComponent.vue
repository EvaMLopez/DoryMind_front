<script setup>
import Navbar from '../components/NavbarComponent.vue'

import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';

/* const calendarOptions = ref({
 plugins: [dayGridPlugin],
 initialView: 'dayGridMonth',
 weekends: false,
 events: [
    { title: 'Meeting', start: new Date() }
 ],
 // Ajusta el número de filas y columnas para reducir el tamaño del calendario
 height: 'auto', // Esto asegura que el calendario se ajuste al contenido
 aspectRatio: 1.35, // Ajusta la relación de aspecto del calendario
 // Puedes ajustar otras opciones según sea necesario
}); */

const calendarOptions = ref({
 plugins: [dayGridPlugin],
 initialView: 'dayGridMonth',
 weekends: false,
 events: [
    { title: 'Meeting', start: new Date() }
 ],
 headerToolbar: {
    left: 'prev,next', // Incluye solo los botones de navegación
    center: 'title', // Incluye el título del mes
    right: '' // No incluye nada en el lado derecho
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
                <button>Mis tareas</button>
                <button>Todas las tareas</button>
                <button>Añadir tarea</button>
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
        }
    }
    .calendar {
        width: 50%; /* Ajusta el ancho según sea necesario */
        max-width: 400px; /* Establece un ancho máximo para evitar que el calendario sea demasiado grande en pantallas grandes */
        margin: 0 auto; /* Centra el calendario horizontalmente */
        font-family: "Irish Grover", system-ui;
        
        .fc-daygrid-day-top {
            padding: 1px 20px; // Ajusta el padding para reducir la altura
            font-size: 10px;
        }

        .fc-daygrid-day {
            padding: 0; // Ajusta el padding para reducir la altura
            font-size: 8px; // Ajusta el tamaño de la fuente para reducir la altura
        }
        
        .fc-header-toolbar {
            .fc-toolbar-title {
                font-size: 17px; // Ajusta el tamaño del texto del nombre del mes y el año
            }
            .fc-today-button {
                font-size: 10px; // Ajusta el tamaño del texto de "today"
            }
        }

        .fc-button {
            font-size: 8px; // Ajusta el tamaño del texto de las flechas
        }

        @media (max-width: 600px) {        
            width: 80%; /* Ajusta el ancho para pantallas pequeñas */
            max-width: none; /* Elimina el ancho máximo para pantallas pequeñas */
        }
    }
}

</style>



