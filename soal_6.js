let pecahan = {
    1000:0,
    2000:0,
    5000:0,
    10000:0,
    50000:0,
}

cariUangKembalian = (total,bayar) => {
    if(total>bayar){
        return console.log('Uang tidak cukup untuk membayar');
    }else{
    let kembalian = bayar - total;
    console.log('Kembalian : Rp.'+kembalian)
    for (const key of Object.keys(pecahan).reverse()) {
       if(kembalian => key){
        let hasilBagi = Math.floor(kembalian / key);
        kembalian = Math.floor(kembalian%key)
        pecahan[key] = hasilBagi
       }
    }
    return console.log(pecahan)
    }

}
cariUangKembalian(10000,3123000)