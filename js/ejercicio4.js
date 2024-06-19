//4)Ejercicio 4
/* function numerosPositivos(n){
  let i = 0;
  while(i <= n){
    if(i >= 0){
      console.log(i);
    }
    i++;
  }
}2,3,4,5,6,7,8,9,10
numerosPositivos(10); */

function positivos() {
  let numero1 = parseInt(document.querySelector("#numero1").value);
  let numero2 = parseInt(document.querySelector("#numero2").value);
  let contador = 0;
  let positivos = [];
  let texto = '';

  document.querySelector('#numero1').value = '';
  document.querySelector('#numero2').value = '';
  document.querySelector("#resultado").innerHTML = "";

  while (numero1 <= numero2) {
    if (numero1 >= 0) {
      positivos.push(numero1);
      texto += numero1 + '<br>'
    }
    numero1++;
  }
  document.querySelector("#resultado").innerHTML += `Numeros positivos:<br>${texto}`;
}
