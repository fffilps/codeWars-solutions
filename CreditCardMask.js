// return masked string
function maskify(cc) {
  if (cc.length > 4) {
    let hold = ""
    let last4 = cc.substring(cc.length - 4)
   for(let x = 0; x < cc.length - 4; x++) {
    hold += '#'
   }
    return cc = hold + last4
  } else {
    return cc
  }
}
