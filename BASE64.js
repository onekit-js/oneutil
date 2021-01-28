export default class BASE64{

  static base64decode(e) {
    const base64DecodeChars = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
    let r, a, c, h, o, t, d;
    for (t = e.length, o = 0, d = ''; o < t;) {
      do r = base64DecodeChars[255 & e.charCodeAt(o++)]
      while (o < t && r == -1);
      if (r == -1) break;
      do a = base64DecodeChars[255 & e.charCodeAt(o++)]
      while (o < t && a == -1);
      if (a == -1) break;
      d += String.fromCharCode(r << 2 | (48 & a) >> 4)
      do {
        if (c = 255 & e.charCodeAt(o++), 61 == c) return d
        c = base64DecodeChars[c]
      } while (o < t && c == -1)
      if (c == -1) break;
      d += String.fromCharCode((15 & a) << 4 | (60 & c) >> 2)
      do {
        if (h = 255 & e.charCodeAt(o++), 61 == h) return d;
        h = base64DecodeChars[h]
      } while (o < t && h == -1)
      if (h == -1) break;
      d += String.fromCharCode((3 & c) << 6 | h)
    }
    return d
  }
}
