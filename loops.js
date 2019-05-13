function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;