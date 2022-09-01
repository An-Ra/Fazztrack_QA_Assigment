sanitizeBody = (obj,array) =>{
let tampung = obj;
let newObj = {};
for (let key in tampung){
    array.forEach(element => {
    if(element === key){
        newObj[key] = tampung[key]
    }

    });
}
    return  console.log(newObj)
} 
sanitizeBody({username: 'andi', password: 'andi123', lastname: 'siahaan'},
    ['username', 'password'])