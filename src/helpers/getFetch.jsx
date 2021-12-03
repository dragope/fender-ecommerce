const productos = [
    {id:1, title:"American Professional II Stratocaster®", price:2500.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10001/0113902719_fen_ins_frt_1_rr.jpg", stock:5},
    {id:2, title:"American Ultra Stratocaster®", price:2200.00, pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10001/0118010712_gtr_frt_001_rr.jpg", stock:5},
    {id:3, title:"30th Anniversary Screamadelica Stratocaster®", price:4500.00 , pictureURL: "https://www.fmicassets.com/Damroot/LgJpg/10001/0141063350_fen_ins_frt_1_rr.jpg", stock:5},
    {id:4, title:"American Ultra Luxe Telecaster®", price:2500.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10001/0118080735_fen_ins_frt_1_rr.jpg", stock:5},
    {id:5, title:"Richie Kotzen Telecaster®", price:3000.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10002/0255202532_gtr_frt_001_rr.jpg", stock:5},
    {id:6, title:"Kurt Cobain Jaguar® Left-Hand", price:3250.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10002/0143021700_gtr_frt_001_rl.jpg", stock:5},
    {id:7, title:"Johnny Marr Jaguar®", price:4200.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10002/0116400705_gtr_frt_001_rr.jpg", stock:5},
    {id:8, title:"Noventa Jazzmaster®", price:3600.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10001/0140932340_fen_ins_frt_1_rr.jpg", stock:5},
    {id:9, title:"Road Worn® '60s Jazzmaster®", price:4250.00 , pictureURL:"https://www.fmicassets.com/Damroot/LgJpg/10002/0144800300_gtr_frt_001_rr.jpg", stock:5}
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000);
})