<script setup>

const contactos = [
    { name: "Elisabeth Pérez", phone: "123-456-7890" },
    { name: "María Rodríguez", phone: "987-654-3210" },
    { name: "Carlos González", phone: "555-123-4567" },
    { name: "Ana Martínez", phone: "789-012-3456" },
    { name: "Luisa Herrera", phone: "456-789-0123" }
];


</script>



<template>
    <div class="Contactos">
        <h1>Lista De Contactos</h1>
        <ul>
            <li v-for="index in contactos" :key="index.name" style="color: rgb(250, 0, 0);">
                {{ index.name }} : {{ index.phone }}
            </li>
        </ul>
    </div>
</template>

