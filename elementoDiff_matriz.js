function diffArray(arr1, arr2) {
    var nuevoArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {//busca en arr2 el contenido de arr1[i] si no está:
            nuevoArr.push(arr1[i]);//colócalo al final del arreglo
   }
}
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) === -1) {
                    nuevoArr.push(arr2[i]);
                
        }
    }
    return nuevoArr;
}
 
diffArray([18,21,2,3,5], [1, 2, 3, 4, 5])
