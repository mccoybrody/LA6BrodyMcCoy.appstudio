function addTwo(n1,n2) {
  return Number(n1) + Number(n2)
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
var answer = 0


btnAdd.onclick=function(){
  lblCalculator.value = addTwo(inptFirst.value,inptSecond.value)
}

btnMultiply.onclick=function(){
  lblCalculator.value = multiplyTwo(inptFirst.value,inptSecond.value)
}

btnClear.onclick=function(){
  lblCalculator.value = ""
}

