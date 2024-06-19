function presentar() {
  const cadena = document.querySelector("#cadena").value;
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  let cantidad = 0;
  for (let i = 0; i < cadena.length; i++) {
    cantidad++;
  }
  document.querySelector(
    "#resultado"
  ).innerHTML = `Cantidad de caracteres: ${cantidad}`;
}
