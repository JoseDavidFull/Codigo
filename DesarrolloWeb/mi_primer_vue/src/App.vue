<template>
    <div>
      <h2>Formulario de Registro de Usuarios</h2>
  
      <form @submit.prevent="registrarUsuario">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="usuario.nombre" required />
        </div>
  
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" v-model="usuario.email" required />
          <span v-if="!validarCorreo">@ Correo electrónico no válido</span>
        </div>
  
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" v-model="usuario.password" required />
        </div>
  
        <button type="submit">Registrarse</button>
      </form>
  
      <div v-if="registroExitoso">
        <p>¡Registro exitoso! Bienvenido, {{ usuario.nombre }}.</p>
      </div>
     
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: {
          nombre: '',
          email: '',
          password: ''
        },
        registroExitoso: false
      };
    },
    computed: {
      validarCorreo() {
        // Validación simple para verificar la presencia de "@" en el correo electrónico
        return this.usuario.email.includes('@');
      }
    },
    methods: {
      registrarUsuario() {
        // Lógica para registrar al usuario (puedes enviar los datos al servidor aquí)
        // Aquí solo simulo un registro exitoso
        this.registroExitoso = true;
      }
    }
  };
  </script>
  
  <style scoped>
    form {
      max-width: 400px;
      margin: 20px auto;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border-radius: 20px;
    }
  
    button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  
    span {
      color: red;
    }
  </style>
  