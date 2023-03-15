let bombo = document.getElementById('bombo');
let jugadorDiv = document.getElementById("jugador")
let compuDiv = document.getElementById("compu")
let imprimeNumeros = document.getElementById("numeros")
let jugador = [];
let compu = [];
let arrayNumeros = [];

const ramdomNumero = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cartonJugador() {

  while (jugador.length < 15) {
    const numeros = ramdomNumero(1, 90)
    if (!jugador.includes(numeros))
      jugador.push(numeros);


    let iguales = false;
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] === numeros[j]) {
          iguales = true;
          break;
        }
      }


      if (iguales) {
        break;
      }
    }
  }
  return jugador;
}

function cartonCompu() {

  while (compu.length < 15) {
    const numeros = ramdomNumero(1,90)
    if (!compu.includes(numeros))
      compu.push(numeros);


    let iguales = false;
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] === numeros[j]) {
          iguales = true;
          break;
        }
      }
      if (iguales) {
        break;
      }
    }
  }

  return compu;
}

console.log(cartonJugador())
console.log(cartonCompu())




bombo.addEventListener('click', () => {

  let numeroAleatorios = ramdomNumero(1, 90);
  if (arrayNumeros.length < 90) {
    if (!arrayNumeros.includes(numeroAleatorios)) {
      arrayNumeros.push(numeroAleatorios);
      console.log(numeroAleatorios);
      imprimeNumeros.innerHTML += `<div class="card mt-1">${numeroAleatorios}</div>`;
    }
  }  
  else {
    alert('se acabo el juego');
  
  }

  colorComparar(numeroAleatorios,jugador);
  colorComparar(numeroAleatorios,compu);
})




function colorComparar(numero,carJugador){

  carJugador.forEach(element => {
    
    if(element== numero){
       document.getElementById(`${numero}`).style.color="white";
       document.getElementById(`${numero}`).style.background="red";
       document.getElementById(`${numero}`).style.border="1px solid black";
    }

  });

}

let jugado1 = jugador.forEach(function(valor) {
 
  jugadorDiv.innerHTML += `<div class="card mt-1">
  <div class="card-body" id="${valor}">${valor}</div></div>`;
})

let pc1 = compu.forEach(function(valor) {
 
  compuDiv.innerHTML += `<div class="card mt-1">
  <div class="card-body"id="${valor}">${valor}</div></div>`;
})

