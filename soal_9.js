const apartmentFacilities = [
    {
        cluster: "A",
        facilities: { mosque: true, park: false, gym: true},
    },
    {
        cluster: "B",
        facilities: { mosque: false, park: false, gym: true},
    },
    {
        cluster: "C",
        facilities: { mosque: true, park: true, gym: false},
    },
    {
        cluster: "D",
        facilities: { mosque: false, park: true, gym: false},
    },
    {
        cluster: "E",
        facilities: { mosque: false, park: true, gym: true},
    },
];

getApartmentByFacility = (facility) => {
    const tersedia = []
    apartmentFacilities.forEach((dataApart)=>{
        if(dataApart.facilities[facility] == true){
            tersedia.push(dataApart.cluster)
        }
    })

    return console.log(tersedia)
}
getApartmentByFacility('park')
getApartmentByFacility('gym')
getApartmentByFacility('mosque')