import strato1 from '../components/images/guitarras/American Professional II Stratocaster®/American Professional II Stratocaster®.jpg'
import strato11 from '../components/images/guitarras/American Professional II Stratocaster®/American Professional II Stratocaster®_2.jpg'
import strato12 from '../components/images/guitarras/American Professional II Stratocaster®/American Professional II Stratocaster®_3.jpg'
import strato13 from  '../components/images/guitarras/American Professional II Stratocaster®/American Professional II Stratocaster®_4.jpg'
import strato2 from '../components/images/guitarras/American Ultra Stratocaster®/American Ultra Stratocaster®.jpg'
import strato21 from '../components/images/guitarras/American Ultra Stratocaster®/American Ultra Stratocaster®_2.jpg'
import strato22 from '../components/images/guitarras/American Ultra Stratocaster®/American Ultra Stratocaster®_3.jpg'
import strato23 from '../components/images/guitarras/American Ultra Stratocaster®/American Ultra Stratocaster®_4.jpg'
import strato3 from '../components/images/guitarras/30th_Anniversary_Screamadelica_Stratocaster/30th_Anniversary_Screamadelica_Stratocaster.jpg'
import strato31 from '../components/images/guitarras/30th_Anniversary_Screamadelica_Stratocaster/30th_Anniversary_Screamadelica_Stratocaster_2.jpg'
import strato32 from '../components/images/guitarras/30th_Anniversary_Screamadelica_Stratocaster/30th_Anniversary_Screamadelica_Stratocaster_3.jpg'
import strato33 from '../components/images/guitarras/30th_Anniversary_Screamadelica_Stratocaster/30th_Anniversary_Screamadelica_Stratocaster_4.jpg'
import tele1 from '../components/images/guitarras/American Ultra Luxe Telecaster®/American Ultra Luxe Telecaster®.jpg'
import tele11 from '../components/images/guitarras/American Ultra Luxe Telecaster®/American Ultra Luxe Telecaster®_2.jpg'
import tele12 from '../components/images/guitarras/American Ultra Luxe Telecaster®/American Ultra Luxe Telecaster®_3.jpg'
import tele13 from '../components/images/guitarras/American Ultra Luxe Telecaster®/American Ultra Luxe Telecaster®_4.jpg'
import tele2 from '../components/images/guitarras/Richie Kotzen Telecaster®/Richie Kotzen Telecaster®.jpg'
import tele21 from '../components/images/guitarras/Richie Kotzen Telecaster®/grande.jpg'
import tele22 from '../components/images/guitarras/Richie Kotzen Telecaster®/peq1.jpg'
import tele23 from '../components/images/guitarras/Richie Kotzen Telecaster®/peq2.jpg'
import jaguar1 from '../components/images/guitarras/Kurt Cobain Jaguar® Left-Hand/Kurt Cobain Jaguar® Left-Hand.jpg'
import jaguar11 from '../components/images/guitarras/Kurt Cobain Jaguar® Left-Hand/Kurt Cobain Jaguar® Left-Hand_2.jpg'
import jaguar12 from '../components/images/guitarras/Kurt Cobain Jaguar® Left-Hand/Kurt Cobain Jaguar® Left-Hand_3.jpg'
import jaguar13 from '../components/images/guitarras/Kurt Cobain Jaguar® Left-Hand/Kurt Cobain Jaguar® Left-Hand_4.jpg'
import jaguar2 from '../components/images/guitarras/Johnny Marr Jaguar®/Johnny Marr Jaguar®.jpg'
import jaguar21 from '../components/images/guitarras/Johnny Marr Jaguar®/Johnny Marr Jaguar®_2.jpg'
import jaguar22 from '../components/images/guitarras/Johnny Marr Jaguar®/Johnny Marr Jaguar®_3.jpg'
import jaguar23 from '../components/images/guitarras/Johnny Marr Jaguar®/Johnny Marr Jaguar®_4.jpg'
import jazzmaster1 from '../components/images/guitarras/Noventa Jazzmaster®/Noventa Jazzmaster®.jpg'
import jazzmaster11 from '../components/images/guitarras/Noventa Jazzmaster®/Noventa Jazzmaster®_2.jpg'
import jazzmaster12 from '../components/images/guitarras/Noventa Jazzmaster®/Noventa Jazzmaster®_3.jpg'
import jazzmaster13 from '../components/images/guitarras/Noventa Jazzmaster®/Noventa Jazzmaster®_4.jpg'
import jazzmaster2 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®.jpg'
import jazzmaster21 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_2.jpg'
import jazzmaster22 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_3.jpg'
import jazzmaster23 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_4.jpg'

const productos = [
    {id:1, title:"American Professional II Stratocaster®", category: "stratocaster", price:2500.00 , pictureURL: strato1, pictureDetail1: strato11, pictureDetail2: strato12, pictureDetail3: strato13, stock:5},
    {id:2, title:"American Ultra Stratocaster®", category: "stratocaster", price:2200.00, pictureURL: strato2, pictureDetail1: strato21, pictureDetail2: strato22, pictureDetail3: strato23, stock:5},
    {id:3, title:"30th Anniversary Screamadelica Stratocaster®", category: "stratocaster", price:4500.00 , pictureURL: strato3, pictureDetail1: strato31, pictureDetail2: strato32, pictureDetail3: strato33, stock:5},
    {id:4, title:"American Ultra Luxe Telecaster®", price:2500.00 , category: "telecaster", pictureURL: tele1, pictureDetail1: tele11, pictureDetail2: tele12, pictureDetail3: tele13, stock:5},
    {id:5, title:"Richie Kotzen Telecaster®", price:3000.00 , category: "telecaster", pictureURL: tele2, pictureDetail1: tele21, pictureDetail2: tele22, pictureDetail3: tele23, stock:5},
    {id:6, title:"Kurt Cobain Jaguar® Left-Hand", price:3250.00 , category: "jaguar", pictureURL: jaguar1, pictureDetail1: jaguar11, pictureDetail2: jaguar12, pictureDetail3: jaguar13, stock:5},
    {id:7, title:"Johnny Marr Jaguar®", price:4200.00 , category: "jaguar", pictureURL: jaguar2, pictureDetail1: jaguar21, pictureDetail2: jaguar22, pictureDetail3: jaguar23, stock:5},
    {id:8, title:"Noventa Jazzmaster®", price:3600.00 , category: "jazzmaster", pictureURL: jazzmaster1, pictureDetail1: jazzmaster11, pictureDetail2: jazzmaster12, pictureDetail3: jazzmaster13, stock:5},
    {id:9, title:"Road Worn® '60s Jazzmaster®", price:4250.00 , category: "jazzmazter", pictureURL: jazzmaster2, pictureDetail1: jazzmaster21, pictureDetail2: jazzmaster22, pictureDetail3: jazzmaster23, stock:5}
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000);
})