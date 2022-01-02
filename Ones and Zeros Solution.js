const binaryArrayToNumber = arr => {
  // your code
  let count = 0
  let joined = arr.reverse()
  for(let i = 0; i < joined.length; i++) {
    count += (2 ** i) * arr[i]
  }
    return count
};
