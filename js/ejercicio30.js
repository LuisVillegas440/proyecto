function presentar() {
  const cadena = document.querySelector("#cadena").value;
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  let cadenaSinEspacios = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] != " ") {
      cadenaSinEspacios += cadena[i];
    }
  }
  document.querySelector(
    "#resultado"
  ).innerHTML = `Cadena sin espacios: "${cadenaSinEspacios}"`;
}
