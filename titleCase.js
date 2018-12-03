function titleCase(str) {
var cadena=" ";
var separador=" ";
var nueva_cadena;
cadena= str.toLowerCase();
nueva_cadena=cadena.split(separador)//ya es un aarreglo
 for(var i=0; i<nueva_cadena.length;i++) {
var nn=nueva_cadena[i][0].toUpperCase();//primera letra del array que convierte a mayus
var nn_cambiada= nueva_cadena[i].replace(nueva_cadena[i][0],nn);
nueva_cadena[i]=nn_cambiada;

}
  return nueva_cadena.join(" ");
}


titleCase("Mira lo que ocurre");
