function sumAll(arr) { 
var maxi= Math.max(arr[0],arr[1]);
var mini=Math.min(arr[0],arr[1]);
var aux=0for(var i=mini; i<=maxi;i++){ // a partir del mínimo le suma 1 hasta llegar a max

 aux +=i;
}
return aux; ;//almacena cada valor y los suma

}

sumAll([14, 20]);
