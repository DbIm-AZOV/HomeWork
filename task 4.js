function sortedArr(arr1, arr2) {
  if ((arr1.length < 1) ||(arr1.length > 1000) || (arr2.length < 1)  || (arr2.length > 1000)) {return alert("arr2 and arr1 not diapazon")}
  let arrEnd = [];
  let resultArr = [];
  for (let i =  0; i < arr2.length; i++){
    if ((arr2[i] < 0) || (arr2[i] > 1000)) {return alert("arr2[i] not diapazon")}
    if (arr2.indexOf(arr2[i], i + 1) != -1 ) {return alert("arr2 elem not distinct")}
    if (arr1.indexOf(arr2[i]) == -1 ) {return alert("arr2[i] not in arr1")}
    let val = arr2[i];
      for (let i = 0; i < arr1.length; i++){
        if ((arr1[i] < 0) || (arr1[i] > 1000)) {return alert("arr1[i] not diapazon")}
        if (arr1[i] === val) {
          resultArr.push(val)
        }
      }
    }
    for (let i = 0; i< arr1. length; i++){
      if (resultArr.indexOf(arr1[i]) == -1 ){
        arrEnd.push(arr1[i])
      }
    }
    return resultArr.concat(arrEnd.sort((a,b) => a-b));
}  