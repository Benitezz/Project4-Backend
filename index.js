const express = require('express')
const app = express()
var PORT = process.env.PORT || 8000
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();
const axios = require('axios')
const yelp = require('yelp-fusion')

const restarauntRoutes = require('./routes/restaurantRoutes')
const favoriteRoutes = require('./routes/favoriteRoutes')

require('./db/connection')


const apiKey = process.env.APIKEY
const client = yelp.client(apiKey)

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/restaraunt', restarauntRoutes)
app.use('/favorites', favoriteRoutes)


app.get('/', (req,res)=>{
    res.json('Welcome')
})

// app.get('/api/', (req,res)=>{
//     // const {term, location} = req.query
//     const config ={
//         method: 'get',
//         url: `https://api.yelp.com/v3/businesses/search?location=78745`,
//         headers: {
//             'Autorization': `Bearer ${apiKey}`
//         }
        
//     }

// axios(config)
// .then(function (response) {
//    return JSON.stringify(response.data, null, 2) 
// })
// .then(function (jsonResponse) {
//     res.send(jsonResponse)
// })
// .catch(function (error) {
//     console.log('Broken')
// })   
// })

// app.get('/api', (req,res) => {
//     client.search({
//         term: '',
//         location: 78745,
//         limit: 3
//     }).then(response =>{
//         console.log(JSON.stringify(response.jsonBody))
//         res.send(response.jsonBody.businesses)
//     }).catch(e=>{
//         console.log(e)
//     })
// })

app.listen(PORT, ()=>{
    console.log('App Connected')
})