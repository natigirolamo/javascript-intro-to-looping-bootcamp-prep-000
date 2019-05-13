describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length