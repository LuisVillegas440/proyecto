function presentar() {
  const cadena = document.querySelector("#cadena").value;
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  if (cadena.length > 0) {
    const caracter = cadena[cadena.length - 1];
    let cantidad = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] == caracter) {
        cantidad++;
      }
    }
    document.querySelector(
      "#resultado"
    ).innerHTML = `Cantidad de veces que aparece "${caracter}": ${cantidad}`;
  }
}
