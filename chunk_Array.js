function chunkArrayInGroups(arr, size) {
 var bidimensional=[];
for(var i=0; i<arr.length;i+=size)//el incremento está en función de size
{
bidimensional.push(arr.slice(i, i+size));
}
  return bidimensional;
}
