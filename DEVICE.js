export default class DEVICE {
  static isMobile() {
    const ua = navigator.userAgent;
  
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  
      isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  
      isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    return isIphone || isAndroid
  }
}
