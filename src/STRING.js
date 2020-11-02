export default class STRING {
  static firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
  }

  static firstLower(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1)
  }
}
