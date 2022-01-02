// complete the function
function solution(string) {
    if(string.match(/[A-Z]/g))
      {
        let cap = (/([a-z])([A-Z])/g)
        return string.replace(cap, '$1 $2')
        
        
        
      } else {
        return string
      }
}
