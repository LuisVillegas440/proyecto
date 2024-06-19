function numerosPostivoNegativo() {
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

  let positivos = [];
  let negativos = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos.push(numeros[i]);
    }
    if (numeros[i] < 0) {
      negativos.push(numeros[i]);
    }
  }

  document.querySelector(
    "#resultado"
  ).innerHTML = `Números positivos:${positivos}<br>`;
  document.querySelector(
    "#resultado"
  ).innerHTML += `Números negativos:${negativos}`;
}
/* 
    let positivos = [];
let negativos = [];

//let positvo = numeros[0];
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] > 0){
    //positivos.push(numeros[i]);
    console.log(`Es positivo ${numeros[i]}`);
  }
  
}
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] < 0){
    //negativos.push(numeros[i]);
    console.log(`Es negativo${numeros[i]}`);
  }
  
} */
//console.log(`Los numeros positivos:${positivos}`);
//console.log(`Los numeros negativos:${negativos}`);
