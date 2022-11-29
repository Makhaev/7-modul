// 3 задание
function forObj(){
    return Object.create(null)
}
const obj =forObj()
console.log(Object.getPrototypeOf(obj))