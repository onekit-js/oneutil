export default class BOOLEAN
{
    static fix(obj) {
        if (typeof obj === 'string') {
          return obj === 'checked'
        } else if (typeof obj === 'boolean') {
          return obj
        } else if (typeof obj === 'number') {
          return obj === 0
        } else {
          return obj != null
        }
      }
}