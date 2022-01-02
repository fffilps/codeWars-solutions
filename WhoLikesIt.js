function likes(names) {
  // TODO
  let ending = "likes this"
  let ending2 = "like this"
  if(names == ""){
return `no one ${ending}`
  } else if(names.length <= 4) {
    if(names.length == 1){
      return `${names} ${ending}`
    }
    else if(names.length == 2){
      return `${names[0]} and ${names[1]} ${ending2}`
    }
    else if(names.length == 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} ${ending2}`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  } else {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
 }
