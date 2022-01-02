var countBits = function(n) {
  // Program Me
  let number = parseInt(n)
  let binary = n.toString(2)
  let count = 0
  
  for(let char of binary) {
    if(char == 1){
      count+=1
    }
  }
  
  return count
};
