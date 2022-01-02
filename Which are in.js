function inArray(array1,array2){
  //...
  let r = []
  for(let i = 0; i < array2.length; i++) {
    array1.forEach(x => {
      if(array2[i].includes(x) && !r.includes(x)) {
        r.push(x)
      }
    })
  }
  return r.sort()
}
