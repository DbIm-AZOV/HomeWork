
function bracketShow(s){
 
  let last;
  let stack = [];
  let index;
  const  bracketsOpen = ["(","{","["];
  const  bracketsClose = [")","}","]"];

  for(let i=  0; i < s.length; i++){
    let char = s[i];

    if(bracketsOpen.indexOf(char) != -1){
      stack.push(last=  char);
    }else if ((index = bracketsClose.indexOf(char)) != -1){
            if (last == bracketsOpen[index]){
              stack.pop();
              last = stack[stack.length - 1];
            }else{
               return false;
            }
    }
  }
 return !last;
}