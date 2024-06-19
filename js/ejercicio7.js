//7)Ejercicio 7
//divisoresNumeros(12,112); 
/* for(let i=1; i <= 12; i++){
    let r = i + 10;
    let tabla = `10 + ${i} = ${r}`;
    console.log(tabla);
  }  */
function tablaSumar(){
    let numero1 = parseInt(document.querySelector('#numero1').value);
    document.querySelector('#resultado').innerHTML = '';
    for(let i =1; i <=12; i++){
    let r = i + numero1;
    let tabla = `${numero1} + ${i} = ${r}`;
    document.querySelector('#resultado').innerHTML += `<br>${tabla}`;
    }
    
}