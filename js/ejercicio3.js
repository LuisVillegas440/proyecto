//3)Ejercicio 3
// Ejemplo de uso con N = 20

/* function numerosMultiplos(M, N) {
    let i = 1;
    while (i < N) {
      if (i % M == 0) {
        console.log(i);
      }
      i++;
    }
  }  */

function multiplosDeN() {
  let numero1 = parseInt(document.querySelector("#numero1").value);
  let numero2 = parseInt(document.querySelector("#numero2").value);
  let contador = 0;
  let multiplos = [];

  document.querySelector("#resultado").innerHTML = "";

  while (contador <= numero2) {
    if (contador % numero1 == 0) {
      multiplos.push(contador);
    }
    contador++;
  }
  document.querySelector("#resultado").innerHTML += `${multiplos}`;
}
