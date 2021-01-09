export default class OBJECT {
    static assign(object1, object2) {
        if (object2 == null) {
            return object1
        }
        for (const key of Object.keys(object2)) {
            const value1 = object1[key]
            const value2 = object2[key]
            if (value2 == null) {
                continue;
            }
            if (value1 != null) {
                object1[key] = this.assign(value1, value2)
            } else {
                object1[key] = value2
            }
        }
        return object1;
    }
}