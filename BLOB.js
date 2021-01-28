import BASE64 from './BASE64'
export default class BLOB{
  static blob2Base64(blob, callback) {
    let a = new FileReader();
    a.onload = function (e) {
      callback(e.target.result)
    }
    a.readAsDataURL(blob)
  }

 static blob2string(blob, callbak) {
    const reader = new FileReader()
    reader.onload = () => {
      callbak(reader.result)
    }
    reader.readAsText(blob)
  }

  static blob2ascii(blob, callbak) {
    const reader = new FileReader()
    reader.onload = () => {
      callbak(reader.result)
    }
    reader.readAsText(blob, 'ascii')
  }

  static blob2binary(blob, callback) {
    const reader = new FileReader()
    reader.onload = () => {
      callback(reader.result)
    }
    reader.readAsBinaryString(blob)
  }

  static blob2hex(blob, callback) {
    this.blobToBase64(blob, res => {
      let bin = BASE64.base64decode(res.replace(/[ \r\n]+$/, ""))
      let hex = []
      for (let i = 0; i < bin.length; ++i) {
        let tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
      }
      callback(hex.join(''))
    })
  }

  static blob2arrbuffer(blob, callback) {
    const reader = new FileReader()
    reader.onload = () => {
      callback(reader.result)
    }
    reader.readAsArrayBuffer(blob)
  }
}
