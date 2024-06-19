//9)Ejercicio 9
/* function ncomprendidos(min,max){
  while(min <= max){
    console.log(min);
    min++;
  }
}
ncomprendidos(2,7); */

function numerosComprendidos(){
    let numero1 = parseInt(document.querySelector('#numero1').value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    document.querySelector('#resultado').innerHTML = '';
    for(let i = numero1; i <= numero2; i++){
    document.querySelector('#resultado').innerHTML += `<br>${i}`;
    }
}