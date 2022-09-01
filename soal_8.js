const transactions = [
    { id: 1, totalPrice: 652000, day: "senin"},
    { id: 2, totalPrice: 245000, day: "selasa"},
    { id: 3, totalPrice: 214000, day: "rabu"},
    { id: 4, totalPrice: 664000, day: "kamis"},
    { id: 5, totalPrice: 144000, day: "minggu"},
    { id: 6, totalPrice: 422000, day: "sabtu"},
    { id: 7, totalPrice: 263000, day: "minggu"},
    { id: 8, totalPrice: 655000, day: "rabu"},
    { id: 9, totalPrice: 426000, day: "selasa"},
    { id: 10, totalPrice: 512000, day: "kamis"},
];

const rekap = [
    {
        hari: 'senin',
        total:0
    },
    {
        hari: 'selasa',
        total:0
    },
    {
        hari: 'rabu',
        total:0
    },
    {
        hari: 'kamis',
        total:0
    },
    {
        hari: 'jumat',
        total:0
    },
    {
        hari: 'sabtu',
        total:0
    },
    {
        hari: 'minggu',
        total:0
    },
]
rekapData = () => {
rekap.forEach((dataRekap)=>{
    transactions.forEach((dataTransaction)=>{
        if(dataRekap.hari == dataTransaction.day){
            dataRekap.total += dataTransaction.totalPrice
        }
    })
})
return console.log(rekap)
}
rekapData();