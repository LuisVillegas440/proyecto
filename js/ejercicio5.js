//5)Ejercicio 5
/* function numerosPares(n){
  let i =0;
  while(i < n){
    if(i % 2 ==0){
      console.log(i);
    }
    i++;
  }
}
numerosPares(11); */


function positivos() {
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    let contador = 0;
    let numeros = [];
    let texto = '';

    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector("#resultado").innerHTML = "";
  
    while (numero1 <= numero2) {
      if (numero1 % 2 ==0) {
        numeros.push(numero1);
        texto += numero1 + '<br>';
      }
      numero1++;
    }

    
    
    document.querySelector("#resultado").innerHTML += `Numeros pares:<br>${texto}`;
  }
  