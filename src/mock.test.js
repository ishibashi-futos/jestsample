const MockTest = require("./mockTest").MockTest

/**
 * Mockを使用したテストのサンプル
 */
describe("", () => {

  test("mockReturnValueOnce", () => {
    const mock = jest.fn().mockReturnValueOnce(6);
    expect(mock()).toBe(6)
  })

  test("mockの引数、戻り値", () => {
    const mock = jest.fn()
    mock.mockReturnValue({done: true});
    expect(mock({param1: 1})).toEqual({done: true});
    expect(mock.mock.calls[0][0]).toEqual({param1: 1});
  })

  test("mockで置き換える", () => {
    let mockTest = new MockTest()
    expect(mockTest.mockFn()).toBe(true)
    const  mock = jest.fn().mockReturnValueOnce(false)
    mockTest.mockFn = mock
    expect(mockTest.mockFn()).toBe(false)
    expect(mock.mock.results[0].value).toBe(false)
  })

  test("mock関数が呼ばれたかどうか", () => {
    let mockTest = new MockTest()
    expect(mockTest.mockFn()).toBe(true)
    const  mock = jest.fn().mockReturnValue(false)
    mockTest.mockFn = mock
    // この時点ではまだ呼ばれていない
    expect(mock).not.toHaveBeenCalled()
    expect(mockTest.mockFn()).toBe(false)
    // 呼ばれたのでpassする
    expect(mock).toHaveBeenCalled()
    mockTest.mockFn()
    // 呼び出された回数
    expect(mock).toHaveBeenCalledTimes(2)
  })

  test("mockに期待される引数が渡されているかどうか", () => {
    const param = {aaa: "aaaa", bbb: "bbb"}
    const mock = jest.fn()
    mock(param)
    expect(mock).toHaveBeenCalledWith(param)
    // 最後に渡された引数を評価する
    mock(param, 1)
    expect(mock).toHaveBeenLastCalledWith(param, 1)
  })

})