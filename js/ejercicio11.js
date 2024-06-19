/* let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(read(`Ingresa el número ${i + 1}:`));
    numeros.push(numero);
}

console.log("Los números ingresados son:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}   */

function numeros() {
  let numero1 = parseInt(document.querySelector("#numero1").value);
  let numero2 = parseInt(document.querySelector("#numero2").value);
  let numero3 = parseInt(document.querySelector("#numero3").value);
  let numero4 = parseInt(document.querySelector("#numero4").value);
  let numero5 = parseInt(document.querySelector("#numero5").value);
  document.querySelector("#resultado").innerHTML = "";
  document.querySelector("#numero1").value = "";
  document.querySelector("#numero2").value = "";
  document.querySelector("#numero3").value = "";
  document.querySelector("#numero4").value = "";
  document.querySelector("#numero5").value = "";

  let numeros = [];

  numeros.push(numero1);
  numeros.push(numero2);
  numeros.push(numero3);
  numeros.push(numero4);
  numeros.push(numero5);

  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    document.querySelector("#resultado").innerHTML += `Numero ${
      i + 1
    }:${element}<br>`;
  }
}
