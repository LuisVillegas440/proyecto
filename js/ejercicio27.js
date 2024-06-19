function presentar() {
  const cadena = document.querySelector("#cadena").value;
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    document.querySelector("#resultado").innerHTML += `${cadena[i]}`;
  }
}
