export default class STRING {
  static firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
  }

  static firstLower(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1)
  }

  static replace(string, str1, str2) {
    let result = ''
    let inTag = false
    for (let i = 0; i < string.length; i++) {
      const chr = string.substr(i, 1)
      switch (chr) {
        case '<':
          inTag = true
          result += chr
          break
        case '>':
          inTag = false
          result += chr
          break
        case str1:
          result += inTag ? chr : str2
          break
        default:
          result += chr
          break
      }
    }
    return result
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrayBuffer) {
    const base64Content = Buffer.from(arrayBuffer).toString('base64')
    return base64Content
  }
}
