function rot13(message){
  //your code here
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let rotAlp = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
  let mhm = ""
  
  for(let i of message) {
    //create an if statement to catch when not letters
    const pattern = /[a-z]|[A-Z]/
    if(pattern.test(i)){
       let placing = alp.indexOf(i)
    mhm += rotAlp[placing]
    } else {
      mhm += i
    }
  }
  return mhm
}
