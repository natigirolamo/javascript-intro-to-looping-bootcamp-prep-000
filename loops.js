describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)
  describe('doWhileLoop(num)', () => {
    it ('console logs "I run once regardless." 1 time when passed an integer of 0 as a parameter.', () => {
        const spy = chai.spy.on(console, 'log');
        doWhileLoop(0);
        expect(spy).to.have.been.called.exactly(1);
    })

      expect(newArray).to.have.length.of.at.most(l - 1)
    it ('console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.', () => {
      const spy = chai.spy.on(console, 'log');
      doWhileLoop(10);
      expect(spy).to.have.been.called.exactly(10);
    })
  })
})