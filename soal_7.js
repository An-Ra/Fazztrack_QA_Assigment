const saham1 = [10, 2, 11, 20, 3, 5]
const saham2 = [33, 29, 11, 3]

findHigestProfit = (...array) => {
    let profit = 0;
    let profitHigest = 0;
    for (let i = 0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            profit = array[j]-array[i];
            if(profit>profitHigest){
                profitHigest = profit
            }
        }
    }
    if(profitHigest<=0){
        return console.log('Tida Ada Profit')
    } else {
        return console.log(profitHigest)
    }
}

findHigestProfit(...saham1)
findHigestProfit(...saham2)
