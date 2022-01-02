function pigIt(str){
  //Code here
  let words = str.split(" ")
  for(let i in words) {
    let letter = words[i][0]
    if(!!letter.match(/^[.,:!?]/)) {
      words[i] = letter
    } else {
    words[i] += `${letter}ay`
    words[i] = words[i].substr(1)
  }
    }
  return words.join(" ")
}
