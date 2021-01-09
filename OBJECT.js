export default class OBJECT{
    static assign(object1,object2){
        for(const key of Object.keys(object1)){
            const value1 = object1[key]
            const value2 = object2[key]
            if(value1!=null && value2!=null){
                object1[key] = this.assign(value1,value2)
            }else if(value2!=null){
                object1[key] = value2
            }
        }
        return object1;
    }
}