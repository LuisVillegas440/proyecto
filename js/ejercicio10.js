//10)Ejercicio 10

/* for(let i = 1; i <=6; i++){
  if(i % 2 ==0){
    console.log(`${i} es par`);
  }
} */


function numerosParesComprendidos(){
    let numero1 = parseInt(document.querySelector('#numero1').value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    document.querySelector('#resultado').innerHTML = '';

    let pares = [];
    let texto = '';

    while(numero1 <= numero2){
        if(numero1 % 2 ==0){
            pares.push(numero1);
            texto += numero1 + '<br>';
        }
        numero1++;
    }

    document.querySelector('#resultado').innerHTML += `<br>${texto}`
}

/* for(let i = numero1; i <= numero2; i++){
    if(i % 2 == 0){
        pares.push(i);
        texto += i;
    }
document.querySelector('#resultado').innerHTML += `<br>${texto}`;
} */
