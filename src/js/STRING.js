function firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
  }
  function firstLower(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1)
  }
  module.exports = {firstUpper,firstLower }