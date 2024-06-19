function presentar() {
  const cadena = document.querySelector("#cadena").value.trim();
  document.querySelector("#cadena").value = "";
  document.querySelector("#resultado").innerHTML = "";
  const cantidadVocales = [0, 0, 0, 0, 0]; // a,e,i,o,u
  let totalVocales = 0;
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i].toLowerCase();
    if (letra == "a") {
      cantidadVocales[0] += 1;
      totalVocales += 1;
    } else if (letra == "e") {
      cantidadVocales[1] += 1;
      totalVocales += 1;
    } else if (letra == "i") {
      cantidadVocales[2] += 1;
      totalVocales += 1;
    } else if (letra == "o") {
      cantidadVocales[3] += 1;
      totalVocales += 1;
    } else if (letra == "u") {
      cantidadVocales[4] += 1;
      totalVocales += 1;
    }
  }
  let resultado = "";
  resultado += `Total vocales: ${totalVocales}<br>`;
  if (cantidadVocales[0] > 0) {
    resultado += `A: ${cantidadVocales[0]}<br>`;
  }
  if (cantidadVocales[1] > 0) {
    resultado += `E: ${cantidadVocales[1]}<br>`;
  }
  if (cantidadVocales[2] > 0) {
    resultado += `I: ${cantidadVocales[2]}<br>`;
  }
  if (cantidadVocales[3] > 0) {
    resultado += `O: ${cantidadVocales[3]}<br>`;
  }
  if (cantidadVocales[4] > 0) {
    resultado += `U: ${cantidadVocales[4]}<br>`;
  }
  document.querySelector("#resultado").innerHTML = resultado;
}
