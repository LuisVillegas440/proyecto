function main() {
  let mensaje = document.querySelector("#mensaje").value;
  let numero = parseInt(document.querySelector("#numero").value);
  let contador = 0;
  document.querySelector("#resultado").innerHTML = '';
  while (contador < numero) {
    document.querySelector("#resultado").innerHTML += `<br>${mensaje}</br>`;
    contador++;
  }
}
