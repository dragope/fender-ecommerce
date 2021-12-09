import strato1 from '../components/images/guitarras/American Professional II Stratocaster®.jpg'
import strato2 from '../components/images/guitarras/American Ultra Stratocaster®.jpg'
import strato3 from '../components/images/guitarras/30th_Anniversary_Screamadelica_Stratocaster.jpg'
import tele1 from '../components/images/guitarras/American Ultra Luxe Telecaster®.jpg'
import tele2 from '../components/images/guitarras/Richie Kotzen Telecaster®.jpg'
import jaguar1 from '../components/images/guitarras/Kurt Cobain Jaguar® Left-Hand.jpg'
import jaguar2 from '../components/images/guitarras/Johnny Marr Jaguar®.jpg'
import jazzmaster1 from '../components/images/guitarras/Noventa Jazzmaster®.jpg'
import jazzmaster2 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®.jpg'

const productos = [
    {id:1, title:"American Professional II Stratocaster®", category: "stratocaster", price:2500.00 , pictureURL: strato1, stock:5},
    {id:2, title:"American Ultra Stratocaster®", category: "stratocaster", price:2200.00, pictureURL: strato2, stock:5},
    {id:3, title:"30th Anniversary Screamadelica Stratocaster®", category: "stratocaster", price:4500.00 , pictureURL: strato3, stock:5},
    {id:4, title:"American Ultra Luxe Telecaster®", price:2500.00 , category: "telecaster", pictureURL: tele1, stock:5},
    {id:5, title:"Richie Kotzen Telecaster®", price:3000.00 , category: "telecaster", pictureURL: tele2, stock:5},
    {id:6, title:"Kurt Cobain Jaguar® Left-Hand", price:3250.00 , category: "jaguar", pictureURL: jaguar1, stock:5},
    {id:7, title:"Johnny Marr Jaguar®", price:4200.00 , category: "jaguar", pictureURL: jaguar2, stock:5},
    {id:8, title:"Noventa Jazzmaster®", price:3600.00 , category: "jazzmaster", pictureURL: jazzmaster1, stock:5},
    {id:9, title:"Road Worn® '60s Jazzmaster®", price:4250.00 , category: "jazzmazter", pictureURL: jazzmaster2, stock:5}
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000);
})