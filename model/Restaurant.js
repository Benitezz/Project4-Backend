const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    location: String,
    image: String,
    phone: String,
    address: String
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant