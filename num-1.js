// 1 задание
function forObj(){
    userAdam={
        name:'Adam',
        surname:'Makhaev',
        age:24
    }
    for(let key in userAdam){
        console.log(key)
    }
}
forObj()