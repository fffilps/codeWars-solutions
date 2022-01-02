function squareDigits(num){
  let hold = num.toString()
  let answer = ""
  for(let x in hold) {
    answer += hold[x] ** 2
  }
  return parseInt(answer)
}
