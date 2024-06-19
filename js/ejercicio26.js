function presentar() {
    const cadena = document.querySelector("#cadena").value.trim();
    document.querySelector("#cadena").value = "";
    document.querySelector("#resultado").innerHTML = "";
    const longitud = cadena.length;
    for (let i = 0; i < longitud; i++) {
        document.querySelector(
          "#resultado"
        ).innerHTML += `${cadena[0]}<br>`;
    }
  }
  