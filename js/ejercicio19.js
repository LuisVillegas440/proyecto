function numeroMayor(){
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    let numero3 = parseInt(document.querySelector("#numero3").value);
    let numero4 = parseInt(document.querySelector("#numero4").value);
    let numero5 = parseInt(document.querySelector("#numero5").value);
    let numero6 = parseInt(document.querySelector("#numero6").value);
    let numero7 = parseInt(document.querySelector("#numero7").value);
    let numero8 = parseInt(document.querySelector("#numero8").value);
    let numeroespecifico = parseInt(
        document.querySelector("#numeroespecifico").value
      );



    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#numero3").value = "";
    document.querySelector("#numero4").value = "";
    document.querySelector("#numero5").value = "";
    document.querySelector("#numero6").value = "";
    document.querySelector("#numero7").value = "";
    document.querySelector("#numero8").value = "";
  
    let numeros = [];
    let numeroMayor = [];
  
    numeros.push(numero1);
    numeros.push(numero2);
    numeros.push(numero3);
    numeros.push(numero4);
    numeros.push(numero5);
    numeros.push(numero6);
    numeros.push(numero7);
    numeros.push(numero8);

    
  
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > numeroespecifico){
            numeroMayor.push(numeros[i]);
        }
    }
    document.querySelector('#resultado').innerHTML = `Los numeros mayor a ${numeroespecifico} es ${numeroMayor}`

  }

  /* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar un numero ${i + 1}:`));
  numeros.push(numero);
}

const  valorEspecifico = read('Ingresar un valor especifico:');

let numerosMayores = [];

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] > valorEspecifico){
    //console.log(`Estos son los valores mayores:${numeros[i]} de ${valorEspecifico}`);
    numerosMayores.push(numeros[i]);
  }
}
console.log(numerosMayores); */