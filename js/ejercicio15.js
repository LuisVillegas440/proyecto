function numerosMayoryMenor() {
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    let numero3 = parseInt(document.querySelector("#numero3").value);
    let numero4 = parseInt(document.querySelector("#numero4").value);
    let numero5 = parseInt(document.querySelector("#numero5").value);
    let numero6 = parseInt(document.querySelector("#numero6").value);
    let numero7 = parseInt(document.querySelector("#numero7").value);

    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#numero3").value = "";
    document.querySelector("#numero4").value = "";
    document.querySelector("#numero5").value = "";
    document.querySelector("#numero6").value = "";
    document.querySelector("#numero7").value = "";

  
    let numeros = [];
    let suma = 0;
  
    numeros.push(numero1);
    numeros.push(numero2);
    numeros.push(numero3);
    numeros.push(numero4);
    numeros.push(numero5);
    numeros.push(numero6);
    numeros.push(numero7);

let mayor = numeros[0];
let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }if(numeros[i] < menor){
            menor = numeros[i];
        }

        document.querySelector("#resultado").innerHTML = `EL numero mayor es:${mayor} y el menor es:${menor}`};

    }

//5)Ejercicio 5

// let numeros = [];

/* for(let i = 0; i < 7; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`))
  numeros.push(numero);
}

let mayor = numeros[0];
let menor = numeros[0];

for(let i = 1; i < numeros.length; i++){
  if(numeros[i] > mayor){
    mayor = numeros[i];
  }if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
console.log(`El numero mayor es: ${mayor}`);
console.log(`El numero menor es: ${menor}`); */