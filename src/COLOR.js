export default class COLOR {
  static rgba2str(r, g, b, a) {
    function componentToHex(c) {
      c = c.trim()
      const hex = parseInt(c, 10).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a)
  }

  static color(string) {
    let str = string
    if (!str) {
      return null
    }
    const COLORS = {
      aliceblue: '#F0F8FFFF',
      antiquewhite: 'FAEBD7FF',
      aqua: '00FFFFFF',
      aquamarine: '7FFFD4FF',
      azure: 'F0FFFFFF',
      beige: 'F5F5DCFF',
      bisque: 'FFE4C4FF',
      black: '000000FF',
      blanchedalmond: 'FFEBCDFF',
      blue: '0000FFFF',
      blueviolet: '8A2BE2FF',
      brown: 'A52A2AFF',
      burlywood: 'DEB887FF',
      cadetblue: '5F9EA0FF',
      chartreuse: '7FFF00FF',
      chocolate: 'D2691EFF',
      coral: 'FF7F50FF',
      cornflowerblue: '6495EDFF',
      cornsilk: 'FFF8DCFF',
      crimson: 'DC143CFF',
      cyan: '00FFFFFF',
      darkblue: '00008BFF',
      darkcyan: '008B8BFF',
      darkgoldenRod: 'B8860BFF',
      darkgray: 'A9A9A9FF',
      darkgreen: '006400FF',
      darkkhaki: 'BDB76BFF',
      darkmagenta: '8B008BFF',
      darkolivegreen: '556B2FFF',
      darkorange: 'FF8C00FF',
      darkorchid: '9932CCFF',
      darkred: '8B0000FF',
      darksalmon: 'E9967AFF',
      darkseaGreen: '8FBC8FFF',
      darkslateBlue: '483D8BFF',
      darkslateGray: '2F4F4FFF',
      darkturquoise: '00CED1FF',
      darkviolet: '9400D3FF',
      deeppink: 'FF1493FF',
      deepskyblue: '00BFFFFF',
      dimgray: '696969FF',
      dodgerblue: '1E90FFFF',
      feldspar: 'D19275FF',
      firebrick: 'B22222FF',
      floralwhite: 'FFFAF0FF',
      forestgreen: '228B22FF',
      fuchsia: 'FF00FFFF',
      gainsboro: 'DCDCDCFF',
      ghostwhite: 'F8F8FFFF',
      gold: 'FFD700FF',
      goldenRod: 'DAA520FF',
      gray: '808080FF',
      green: '008000FF',
      greenyellow: 'ADFF2FFF',
      honeydew: 'F0FFF0FF',
      hotpink: 'FF69B4FF',
      indianred: 'CD5C5CFF',
      indigo: '4B0082FF',
      ivory: 'FFFFF0FF',
      khaki: 'F0E68CFF',
      lavender: 'E6E6FAFF',
      lavendernlush: 'FFF0F5FF',
      lawngreen: '7CFC00FF',
      lemonchiffon: 'FFFACDFF',
      lightblue: 'ADD8E6FF',
      lightcoral: 'F08080FF',
      lightcyan: 'E0FFFFFF',
      lightgoldenRodYellow: 'FAFAD2FF',
      lightgrey: 'D3D3D3FF',
      lightgreen: '90EE90FF',
      lightpink: 'FFB6C1FF',
      lightsalmon: 'FFA07AFF',
      lightseaGreen: '20B2AAFF',
      lightskyBlue: '87CEFAFF',
      lightslateBlue: '8470FFFF',
      lightslateGray: '778899FF',
      lightsteelBlue: 'B0C4DEFF',
      lightyellow: 'FFFFE0FF',
      lime: '00FF00FF',
      limegreen: '32CD32FF',
      linen: 'FAF0E6FF',
      magenta: 'FF00FFFF',
      maroon: '800000FF',
      mediumaquaMarine: '66CDAAFF',
      mediumblue: '0000CDFF',
      mediumorchid: 'BA55D3FF',
      mediumpurple: '9370D8FF',
      mediumseagreen: '3CB371FF',
      mediumslateblue: '7B68EEFF',
      mediumspringgreen: '00FA9AFF',
      mediumturquoise: '48D1CCFF',
      mediumvioletred: 'C71585FF',
      midnightblue: '191970FF',
      mintcream: 'F5FFFAFF',
      mistyrose: 'FFE4E1FF',
      moccasin: 'FFE4B5FF',
      navajowhite: 'FFDEADFF',
      navy: '000080FF',
      oldlace: 'FDF5E6FF',
      olive: '808000FF',
      olivedrab: '6B8E23FF',
      orange: 'FFA500FF',
      Orangered: 'FF4500FF',
      Orchid: 'DA70D6FF',
      palegoldenrod: 'EEE8AAFF',
      palegreen: '98FB98FF',
      paleturquoise: 'AFEEEEFF',
      palevioletred: 'D87093FF',
      papayawhip: 'FFEFD5FF',
      peachpuff: 'FFDAB9FF',
      peru: 'CD853FFF',
      pink: 'FFC0CBFF',
      plum: 'DDA0DDFF',
      powderblue: 'B0E0E6FF',
      purple: '800080FF',
      red: 'FF0000FF',
      rosybrown: 'BC8F8FFF',
      royalblue: '4169E1FF',
      saddlebrown: '8B4513FF',
      salmon: 'FA8072FF',
      sandybrown: 'F4A460FF',
      seagreen: '2E8B57FF',
      seashell: 'FFF5EEFF',
      sienna: 'A0522DFF',
      silver: 'C0C0C0FF',
      skyblue: '87CEEBFF',
      slateblue: '6A5ACDFF',
      slategray: '708090FF',
      snow: 'FFFAFAFF',
      springgreen: '00FF7FFF',
      steelblue: '4682B4FF',
      tan: 'D2B48CFF',
      teal: '008080FF',
      thistle: 'D8BFD8FF',
      tomato: 'FF6347FF',
      turquoise: '40E0D0FF',
      violet: 'EE82EEFF',
      violetred: 'D02090FF',
      wheat: 'F5DEB3FF',
      white: 'FFFFFFFF',
      whitesmoke: 'F5F5F5FF',
      yellow: 'FFFF00FF',
      yellowgreen: '9ACD32FF'
    }
    const nameColor = COLORS[str.toLowerCase()]
    if (nameColor) {
      return nameColor
    }
    if (str.indexOf('rgb') < 0) {
      if (str.length === 7) {
        str += ''
      }
      return str
    }
    str = str.substring(str.indexOf('(') + 1, str.indexOf(')'))
    const array = str.split(',')
    if (array.length === 3) {
      array.push(1)
    }
    const color = COLOR.rgba2str(array[0], array[1], array[2], array[3] * 255 + '')
    return color
  }

  static str2array(str) {
    return [parseInt(str.substr(1, 2), 16),
      parseInt(str.substr(3, 2), 16),
      parseInt(str.substr(5, 2), 16),
      parseInt(str.substr(7, 2), 16)]
  }

  static array2str(array) {
    function f(v) {
      let s = v.toString(16)
      if (s.length === 1) { s = '0' + s }
      return s
    }
    const str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3])
    return str
  }
}
