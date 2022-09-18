const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    location: String,
    image: String,
    phone: String,
    address: String
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)

module.exports = Favorite