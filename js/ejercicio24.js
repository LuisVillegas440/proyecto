function presentar() {
    const cadena = document.querySelector("#cadena").value.trim();
    document.querySelector("#cadena").value = "";
    document.querySelector("#resultado").innerHTML = "";
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i].toUpperCase();
        document.querySelector("#resultado").innerHTML += `${element}</br>`;
    }
  }