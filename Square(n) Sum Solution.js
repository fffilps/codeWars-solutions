function squareSum(numbers){
  let sum = 0
  for(let x = 0; x < numbers.length; x++) {
    sum += numbers[x]**2
  }
  return sum
}
