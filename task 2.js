function palindrome(x) {
  if (typeof x != "number") return alert("not number");
  if  ((x < ((-2) ** 31)) || (x > (2 ** 31 - 1))) return alert("error")
  
  let numArray = String(x).split("");
  let reversedArray = String(x).split("").reverse();
  for (let i = 0; i< numArray.length; i++) {
    if(numArray[i] !== reversedArray[i]) {
        return alert('Not palindrom')
    }
}
 return   alert('palindrom')
}
