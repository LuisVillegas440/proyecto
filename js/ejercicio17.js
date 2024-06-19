//7)Ejercicio 7

/* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar numero${i + 1}:`));
  numeros.push(numero);
}
const numeroBuscado = read('Que numero quiere sacar del arreglo?:');

let contador = 0;
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] == numeroBuscado ){
    contador++;
  }
}
console.log(`El numero ${numeroBuscado} aparece ${contador} veces en el arreglo`); */

function numerosEspecifico() {
  let numero1 = parseInt(document.querySelector("#numero1").value);
  let numero2 = parseInt(document.querySelector("#numero2").value);
  let numero3 = parseInt(document.querySelector("#numero3").value);
  let numero4 = parseInt(document.querySelector("#numero4").value);
  let numero5 = parseInt(document.querySelector("#numero5").value);
  let numero6 = parseInt(document.querySelector("#numero6").value);
  let numero7 = parseInt(document.querySelector("#numero7").value);
  let numero8 = parseInt(document.querySelector("#numero8").value);
  let numero9 = parseInt(document.querySelector("#numero9").value);
  let numero10 = parseInt(document.querySelector("#numero10").value);
  let numeroEspecifico = parseInt(
    document.querySelector("#numeroespecifico").value
  );

  document.querySelector("#resultado").innerHTML = "";
  document.querySelector("#numero1").value = "";
  document.querySelector("#numero2").value = "";
  document.querySelector("#numero3").value = "";
  document.querySelector("#numero4").value = "";
  document.querySelector("#numero5").value = "";
  document.querySelector("#numero6").value = "";
  document.querySelector("#numero7").value = "";
  document.querySelector("#numero8").value = "";
  document.querySelector("#numero9").value = "";
  document.querySelector("#numero10").value = "";

  let numeros = [];
  let contador = 0;

  numeros.push(numero1);
  numeros.push(numero2);
  numeros.push(numero3);
  numeros.push(numero4);
  numeros.push(numero5);
  numeros.push(numero6);
  numeros.push(numero7);
  numeros.push(numero8);
  numeros.push(numero9);
  numeros.push(numero10);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == numeroEspecifico) {
      contador++;
    }
  }
  document.querySelector("#resultado").innerHTML = `Es:${contador}`;
}

/* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar numero${i + 1}:`));
  numeros.push(numero);
}
const numeroBuscado = read('Que numero quiere sacar del arreglo?:');

let contador = 0;
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] == numeroBuscado ){
    contador++;
  }
}
console.log(`El numero ${numeroBuscado} aparece ${contador} veces en el arreglo`); */
