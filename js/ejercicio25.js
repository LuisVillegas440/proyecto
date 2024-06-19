function presentar() {
  const cadena = document.querySelector("#cadena").value.trim();
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  let cantidadPalabras = 0;
  let letraAnterior = null;
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
    if (letraAnterior == null) {
      cantidadPalabras += 1;
    }
    if (letra == " " && letraAnterior != " ") {
      cantidadPalabras += 1;
    }
    letraAnterior = letra;
  }
  document.querySelector(
    "#resultado"
  ).innerHTML = `Cantidad de palabras: ${cantidadPalabras}`;
}
