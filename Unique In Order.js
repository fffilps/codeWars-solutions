var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let results = []
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]){
      results.push(iterable[i])
    }
  }
  return results
}
