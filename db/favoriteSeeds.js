require('./connection')
const Favorite = require('../model/Favorites')

const favorites = [
    {
        name: 'The Meteor',
        cuisine: 'American',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/vv4lWlEG-c50LW1IGBQ9Xw/o.jpg',
        phone: '512-531-9541',
        address: '2110 S Congress Ave Austin, TX 78704'
    }
]

Favorite.deleteMany({})
.then( ()=>{
    return Favorite.insertMany(favorites)
})
.then ((insertedFavorites)=>{
    console.log(insertedFavorites)
})
.catch( err => console.error(err))
.finally(()=>{
    process.exit()
})