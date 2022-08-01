// Program Max Min
let array = [1,2,3,4,5]
let max 
let min 
let tampung = 0;
for (let iterasi1 = 0;iterasi1 < array.length;iterasi1++)
{
// console.log(iterasi1)

for (let iterasi2 = 0;iterasi2 < array.length;iterasi2++)
{
// console.log(iterasi2)
if (iterasi2 === iterasi1) {
    //nothing
} else {
    tampung += array[iterasi2]

}
}
if(iterasi1 == 0) {
    max = tampung;
    min = tampung;
} else if (tampung < min)
{
    min = tampung;
} else if (tampung > max){
    max = tampung;
}
tampung = 0;
}

// console.log(array)
// console.log(array.length)
console.log(min) //10
console.log(max) //14


// Program Bilangan Prima Atau Bukan

const apakahPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      console.log("prima")
    }else{
      console.log("bukan prima")
    }
  }
  

  apakahPrima(2); //prima
  apakahPrima(3); //prima
  apakahPrima(4); //bukan prima
  apakahPrima(9); //bukan prima