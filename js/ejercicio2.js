//2)Ejercicio 2
/* function presentarMultiplosDe7(N) {
  let i = 1;
  while (i <= N) {
    if (i % 7 == 0) {
      console.log(i);
    }
    i++; // Incrementamos i en cada iteración
  }
}*/
function numerosMultiplos7(){
    let numero = document.querySelector('#numero').value;
    let contador = 0;
    let multiplos = [];

    document.querySelector("#resultado").innerHTML = '';
    while(contador < numero){
        if(contador % 7 === 0){
            multiplos.push(contador);
        }
        contador++;
    }
    document.querySelector('#resultado').innerHTML += `${multiplos}`;
}
