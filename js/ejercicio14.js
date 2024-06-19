//4)Ejercicio

/* let numeros = [];

for(let i = 0; i < 6; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
}

let suma = 0;
for(let i = 0; i < numeros.length; i++){
  suma+= numeros[i];
}
let promedio = suma/numeros.length;
console.log(promedio); */


function numerosPromedio() {
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    let numero3 = parseInt(document.querySelector("#numero3").value);
    let numero4 = parseInt(document.querySelector("#numero4").value);
    let numero5 = parseInt(document.querySelector("#numero5").value);
    let numero6 = parseInt(document.querySelector("#numero6").value);

    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#numero3").value = "";
    document.querySelector("#numero4").value = "";
    document.querySelector("#numero5").value = "";
    document.querySelector("#numero6").value = "";

  
    let numeros = [];
    let suma = 0;
    let promedio = 0;
  
    numeros.push(numero1);
    numeros.push(numero2);
    numeros.push(numero3);
    numeros.push(numero4);
    numeros.push(numero5);
    numeros.push(numero6);


    
  
    for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    promedio = suma/numeros.length;
        parseInt(document.querySelector("#resultado").innerHTML = `El promedio es:${
          promedio
        }<br>`).toFixed(2);

    }
  }

  /* let numeros = [];

for(let i = 0; i < 6; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
}

let suma = 0;
for(let i = 0; i < numeros.length; i++){
  suma+= numeros[i];
}
let promedio = suma/numeros.length;
console.log(promedio); */