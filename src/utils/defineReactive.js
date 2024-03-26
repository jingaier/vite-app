// 
export function defineReactice (data,key,val) {
    Object.defineProperty(data,key,{
        enumerable:true,
        get: function() {
            return val
        },
        set: function(newVal){
            if(val === newVal){
                return;
            }
            val = newVal
        }
    })
}
