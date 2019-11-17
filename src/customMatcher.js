expect.extend({
  toHasKey: (map, key) => {
    if (!(map instanceof Map)) return {
      pass: false,
      message: () => {
        return `Map was expected but different item was entered.`
      }
    }
    if (map.has(key)) {
      return {
        pass: true,
        message: () => ""
      }
    } else {
      return {
        pass: false,
        message: () => {
          return `Expected ${key} in key but don't have item`
        }
      }
    }
  },
  toHasKeys: (map, keys) => {
    if (!(map instanceof Map)) return {
      pass: false,
      message: () => {
        return `Map was expected but different item was entered.`
      }
    }
    const notHasKey = keys.filter((key) => !map.has(key))
    if (notHasKey.length == 0) {
      return {
        pass: true,
        message: () => ""
      }
    }
    return {
      pass: false,
      message: () => {
        return `key expected ${keys.join(", ")} but i don't have`
      }
    }
  }
})