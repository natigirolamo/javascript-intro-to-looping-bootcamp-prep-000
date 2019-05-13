
function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}


function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
do {
  array.pop()
} while (array.length>0 && maybeTrue())
return array
}

do_while_arr = ['a','b','c'];
console.log(doWhileLoop(do_while_arr))