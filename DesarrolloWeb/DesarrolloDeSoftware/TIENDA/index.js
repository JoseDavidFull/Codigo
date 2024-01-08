var productos = [
  ["LechePil", 6.5],
  ["Chisito", 1],
  ["ChisitoPicante",1],
  ["Pilfrut",1],
  ["Yogurt",1],
  ["LecheAvena",2],
  ["Mostaza",1.5],
  ["Oreo",2],
  ["Pipoquin",0.5],
  ["Regia",8.5],
  ["Chiquichoc",2],
  ["ChokoSoda",2.5],
  ["Cracker",6],
  ["ClubSocial",2],
  ["WaferGrande",4],
  ["WaferPequeño",1],
  ["Moraditas",2.5],
  ["Gauchitas",2.5],
  ["Aceite",10],
  ["Nosotras",8],
  ["kotex",8],
  ["CocaColaGorda",14],
  ["CocaColaRetornable",7.5],
  ["ColaCola500ml",5],
  ["ColaCola300ml",3],
  ["FantaGorda",13],
  ["CocaColaRetornableFria",8],
  ["Omo",4],
  ["Surf",3.5],
  ["Patito",3],
  ["Mayoneza",1.5],
  ["Ketchup",1.5],
  ["MostazaPicante",2],
  ["TodoBrillo",10],
  ["Alcohol",2.5],
  ["PepsiBlack",10],
  ["Pepsi",11],
  ["PepsiPequeño",5],
  ["PapelHigienicoBlanco",1.5],
  ["PapelHigienicoPlomo",1],
  ["Sardina",10],
  ["Picadillo",2.5],
  ["Atun",5],
  ["AcuariosGorda",14],
  ["Salvieti",10],
  ["Tanpico",12],
  ["PowerAdePequeña",6],
  ["PowerAdeGrande",10],
  ["Paceña",9],
  ["Taquiña",5],
  ["SchneiderPequeña",6],
  ["SchneiderGrande",10],
  ["Magistral",13],
  ["Guantes",10],
  ["Top",2],
  ["Bolivar",5],
  ["NachosNax",2],
  ["ColgatePequeño",5],
  ["ColgateGrande",10],
  ["Tasos",1],
  ["Chubi Chubi",1.5],
  ["Maltin",5],
  ["Topline",2],
  ["Beldent",2],
  ["Groso",0.5],
  ["Maicena",4],
  ["FantaPequeña",5],
  ["Baton",2],
  ["DonVictorio",],
  ["Lazzaroni",5],
  ["Azucar",7],
  ["Arroz",7],
  ["Harina",7],
  ["Sedal",3],
  ["PuraVida",13],
  ["DelValle",15],
  ["DelValleFresh",12],
  ["Genio",2],
  ["DñGusta",0.5],
  ["PolvoDeHornear",3],
  ["FantaRetornable",7.5],
  ["FantaRetornableFria",8],
  ["Alikal",3.5],
  ["Rasuradora",3.5],
  ["PickesosNormales",2],
  ["PickesosPicantes",2],
  ["bon o Bon",1],
  ["Nucita",0.5],
  ["Chicolac",1.5],//aun falta datos para llenar 
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",],
  ["",]
];

function mostrarSugerencias() {
  var input = document.getElementById("nombreProducto");
  var sugerencias = document.getElementById("sugerencias");
  var texto = input.value.toLowerCase();

  sugerencias.innerHTML = "";

  for (var i = 0; i < productos.length; i++) {
      var producto = productos[i][0].toLowerCase();

      if (producto.startsWith(texto)) {
          var sugerencia = document.createElement("div");
          sugerencia.textContent = productos[i][0];
          sugerencia.className = "sugerencia";
          sugerencia.onclick = function() {
              input.value = this.textContent;
              sugerencias.innerHTML = ""; 
          };
          sugerencias.appendChild(sugerencia);
      }
  }
}

function buscarProducto() {
  var productoABuscar = document.getElementById("nombreProducto").value.toLowerCase();

  for (var i = 0; i < productos.length; i++) {
      var producto = productos[i][0].toLowerCase();
      precio = productos[i][1]; 
      if (producto === productoABuscar) {
          document.getElementById("resultado").textContent = "Precio: " + precio;
          return; 
      }
  }

  document.getElementById("resultado").textContent = "Producto no encontrado";
}

function CalcularPrecio() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const resultadoPrecio = cantidad * precio;
  document.getElementById("ResultadoPrecio").innerHTML = resultadoPrecio;
}