module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false
  let brecetsArr = bracketsConfig.map(a=>a.join(""))
  // let arr = [...str]
  for (let i = 0; i < brecetsArr.length; i++){
    if (str.includes(brecetsArr[i])){
      str= str.replace(brecetsArr[i], "")
      i = i-brecetsArr.length
    }
      
  }
  console.log(str)
  
  return str.length === 0 ? true : false  
}
