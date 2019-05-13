function doWhileLoop(array){
function maybeTrue() {
return Math.random() >= 0.5
}

do {
array.pop();
} while (array.length > 0 &&maybeTrue());
return array;

}