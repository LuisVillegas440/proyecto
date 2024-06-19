/* function divisoresNumeros(divisor, numero) {
  let i = 0;
  while (i < numero) {
    if (divisor % i == 0) {
      console.log(i);
    }
    i++;
  }
} */

function divisoresNumeros(){
    let numero1 = parseInt(document.querySelector('#numero1').value);
    let i = 0;
    let divisores = [];
    let texto = '';

    document.querySelector('#numero1').value = '';
    document.querySelector('#resultado').innerHTML = '';
    
    while(i <= numero1){
        if(numero1 % i == 0){
            divisores.push(numero1);
            texto += i + '<br>'
        }
        i++;
    }
    document.querySelector('#resultado').innerHTML += `Numeros divisores de ${numero1}:<br>${texto}`;

}
