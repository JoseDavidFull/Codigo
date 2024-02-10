<script setup>
import { ref } from 'vue';

const eventosHistoricos = ref([
  {
    id: 1,
    fecha: '476 d.C.',
    evento: 'Caída del Imperio Romano de Occidente',
    detalles: 'El último emperador romano, Rómulo Augústulo, es depuesto por Odoacro.',
  },
  {
    id: 2,
    fecha: '1215',
    evento: 'Magna Carta',
    detalles: 'Se firma la Magna Carta en Inglaterra, limitando el poder del monarca y estableciendo principios legales.',
  },
  {
    id: 3,
    fecha: '1492',
    evento: 'Descubrimiento de América',
    detalles: 'Cristóbal Colón llega a América en su primer viaje respaldado por los Reyes Católicos.',
  },
]);
</script>

<template>
  <div class="centrar">
    <h2>Línea de Tiempo Histórica</h2>
    <ul>
      <li v-for="evento in eventosHistoricos" :key="evento.id">
        <strong>{{ evento.fecha }}</strong>: {{ evento.evento }}
        <p>{{ evento.detalles }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.centrar{
  display: flex;
  justify-content: center;
}

</style>
