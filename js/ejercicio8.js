//8)Ejercicio 8
/* function tablaMultiplicar(multiplicador,multiplicando){
  let i = 1;
  while (i <= 10){
    let r = i * multiplicador;
    let tabla = `${multiplicando} * ${i} = ${r}`
    console.log(tabla);
    i++;
  }
  
  
}
tablaMultiplicar(2,2); */
function tablaMultiplicar(){
    let numero1 = parseInt(document.querySelector('#numero1').value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    document.querySelector('#resultado').innerHTML = '';
    for(let i = numero1; i <= numero2; i++){
        let r = i * numero2;
        let tabla = `${numero2} * ${i}  = ${r}`;
        document.querySelector('#resultado').innerHTML += `<br>${tabla}`;        
    }

    
    
}

/* for(let i = numero1; i <= numero2; i++){
    let r = i * numero1;
    let tabla = `${numero1} * ${i} = ${r}`;
    document.querySelector('#resultado').innerHTML = `${tabla}`;
} */