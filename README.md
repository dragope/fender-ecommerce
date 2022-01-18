# Ecommerce for Fender Guitars

Online guitar store for [Fender Guitars](https://www.fender.com).

![ezgif com-gif-maker](https://user-images.githubusercontent.com/83094706/149963669-e30d9f16-c998-454e-95dd-aa1b3ae78728.gif)

## Dependencies Used

[React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)

This library was used to create dynamic routes to navigate the ecommerce site

[Firebase](https://firebase.google.com)

Used to dinamically store and show data of products, orders and clients 

## Implemented Hooks 

### useEffect
Used to properly ensure that the components are rendered and mounted when they are supposed to.

### useState
Used to generate and store local states within the components
Usado para generar estados locales al componente y tambien guardar esos estados para poder luego modificarlos.

### useParams (React-Router-Dom)
Used to detect parameters within the URL's to determine the type and specific product to show

## To download and and use this code

1. Copy the HTTP link from the Code section

2. In the terminal, chose the directory you want to place the project on and type:

#### `git clone https://github.com/dragope/react-drago.git`

3. After the project is properly cloned, in the directory "react-drago", install the dependecies needed:

#### `npm install`

4. To open the project in a browser, on the same directory, type:

#### `npm start`
