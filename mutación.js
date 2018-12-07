function mutation(arr) {
var primerCaracter= arr[0].toLowerCase().split('');
var segundoCaracter=arr[1].toLowerCase(). split('');
for(var i=0; i<segundoCaracter.length;i++){ //buscar las letras de dos en uno
var valor= primerCaracter.indexOf(segundoCaracter[i]);//buscar elementos de dos en uno
if(valor===-1){
    return false;
    }
  }
    return true;
}
mutation(["hilda", "hey"]);
