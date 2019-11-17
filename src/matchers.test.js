/**
 * 様々なMatcherのサンプルコード
 */
describe("matchers", () => {
  /** 値が厳密に等価であること */
  test("tobe", () => {
    expect(1 + 1).toBe(2);
  })

  /** toBeでは、Object.isによる評価がされる。toEqualは、要素を再起的にチェックする */
  test("toEqual", () => {
    const obj = {
      one: 1,
      two: "2"
    }
    expect(obj).toEqual({one: 1, two: "2"});
  })

  test("真偽値(およびそれらしく思える値)", () => {
    /** nullの評価 */
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()

    /** zeroの評価 */
    const z = 0;
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })

  test("数値", () => {
    const value = 2 + 2
    let e = expect(value)
    e.toBeGreaterThan(3) // > 4
    e.toBeGreaterThanOrEqual(3.5) // >= 4
    e.toBeLessThan(5) // < 5
    e.toBeLessThanOrEqual(4.5) // < 5

    /** 丸め誤差による失敗を避けるには */
    const doubleValue = 0.1 + 0.2
    expect(doubleValue).toBeCloseTo(0.3)
  })

  test("文字列と正規表現", () => {
    expect('team').not.toMatch(/I/)
    expect('Christoph').toMatch(/stop/)
  })

  test("配列", () => {
    const weekday = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ]

    expect(weekday).toContain("Monday")
    expect(weekday.map(v => v.toUpperCase())).toContain("MONDAY")
  })

  test("例外がThrowされること", () => {
    function compileAndroidCode (param) {
      if (!param) throw new Error('you are using the wrong JDK')
      return
    }

    // 検証したい関数のオブジェクトを渡す
    expect(compileAndroidCode).toThrow();
    // 関数にパラメータを渡す場合は、匿名関数のなかで呼び出してやればいい
    expect(() => {
      compileAndroidCode(undefined)
    }).toThrow()
    // exceptionのメッセージを検証可能
    expect(compileAndroidCode).toThrow('you are using the wrong JDK')
    expect(compileAndroidCode).toThrow(/JDK/)
  })
})