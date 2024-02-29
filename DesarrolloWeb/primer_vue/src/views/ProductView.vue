<template>
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        <li v-for="product in products" :key="product.id" >
          <div class="product-card">
            <img :src="product.image" alt="Imagen del Producto" class="product-image" />
            <div class="product-details">
              <h2>{{ product.name }}</h2>
              <p class="product-price">Precio: ${{ product.price.toFixed(2) }}</p>
              <p>Stock: {{ product.stock }}</p>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const products = ref([
    {
      id: 1,
      name: "Laptop Ultrabook",
      price: 899.99,
      stock: 15,
      image: "laptop_image.jpg",
      description: "Una potente laptop para tus necesidades diarias.",
    },
    {
      id: 2,
      name: "Smartphone Premium",
      price: 699.99,
      stock: 8,
      image: "phone_image.jpg",
      description: "El último modelo de smartphone con características avanzadas.",
    },
    {
      id: 3,
      name: "Auriculares Inalámbricos",
      price: 129.99,
      stock: 3,
      image: "headphones_image.jpg",
      description: "Disfruta de tu música sin cables con estos auriculares de alta calidad.",
    },
    // ... otros productos
  ]);
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  
  .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  
  .product-image {
    max-width: 100px;
    margin-right: 15px;
  }
  
  .product-details {
    flex: 1;
  }
  
  .product-price {
    font-weight: bold;
    color: #e44d26; /* Color naranja */
  }
  </style>
  