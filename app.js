// El principal objetivo de este desafío es fortalecer tus habilidades en
//  lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

let listaNumeros = [2, 3, 4, 5];
let listaCualquiera = ["eduar", 2, "marcela", 3];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre == "") {
    alert("No ha agregado un nombre valido");
  } else {    
    listaNombres.push(nombre);
    //alert(nombre);
    mostrarNombres(listaNombres);// parametros

    // Obtener la lista por el id
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';   //Limpia el elemento <ul> antes de mostrar todos los nombres

    // Recorrer el array y agregar cada elemento a la lista
    listaNombres.forEach((elemento) => {
      // Crear un nuevo elemento <li>
      const li = document.createElement("li");
      // Establecer el contenido del elemento <li>
      li.textContent = elemento;
      // Agregar el <li> a la lista
      lista.appendChild(li);
    });
    const inputNombre = document.getElementById("amigo");
    inputNombre.value = '';
  }
}

//funcion que imprime en consola cualquie lista recibida por parametros
function mostrarNombres(lista) { // argumentos
  console.log(lista);
}


function sortearAmigo(){

    let long = listaNombres.length - 1;
    //alert("prueba")
    console.log("longitud: " +long);
    const numeroAleatorio = Math.floor(Math.random() * (long - 0 + 1)) + 0;
    console.log(numeroAleatorio);
    console.log(listaNombres[numeroAleatorio]);

    
   //Se limpia la lista 
    const resul = document.getElementById("resultado");
    resul.innerHTML = ''; 
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    
    
   const li = document.createElement("li");
    // Establecer el contenido del elemento <li>
    li.textContent = "El amigo sorteado es: " + listaNombres[numeroAleatorio] ;
    // Agregar el <li> a la lista
    resul.appendChild(li);  

   
    
}



