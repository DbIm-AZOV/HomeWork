function enterArr(arr1, target) {
  let index = arr1.indexOf(target);
  if (index != -1) {return index }
  for (let i =  0; i < arr1.length; i++){
    if (arr1[i] > target) { return index = i}
  }
  return index = arr1.length 
}