function presentar() {
  const cadena = document.querySelector("#cadena").value.trim();
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 == 0) {
      const element = cadena[i];
      document.querySelector("#resultado").innerHTML += `${i} -> "${element}"</br>`;
    }
  }
}
