function frankenSplice(arr1, arr2, n) {
var c_array2= arr2.slice();
for(var i=0; i< arr1. length;i++){

 c_array2.splice(n++,0,arr1[i])
 }
return c_array2;
}
frankenSplice([1, 2, 3], [4, 5], 1)
