let num = parseInt(prompt("Ingrese un número para generar la piramide inversa: "));

for(let i = num; i >= 1; i--) {
  let linea = ""; // creamos una cadena vacía para ir agregando los números
  for(let j = i; j >= 1; j--) { // cambiamos el orden del segundo ciclo for
    linea += j + " "; 
  }
  console.log(linea);
}
