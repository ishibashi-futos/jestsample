const MockTest = (() => {
  let MockTest = function () {
    this.mockFn = () => {
      return true
    }
  }

  return MockTest
})()
exports.MockTest = MockTest