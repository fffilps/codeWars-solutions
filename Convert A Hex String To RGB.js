function hexStringToRGB(hexString) {
  let hold = {r:0, g: 0, b: 0}
  hold.r = parseInt((hexString[1] + hexString[2]), 16)
  hold.g = parseInt((hexString[3] + hexString[4]), 16)
  hold.b = parseInt((hexString[5] + hexString[6]), 16)
  
  
  return hold
}
