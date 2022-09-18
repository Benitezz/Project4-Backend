require('./connection')
const Restaurant = require('../model/Restaurant')

const restaurants = [
    {
        name: 'The Meteor',
        cuisine: 'American',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/vv4lWlEG-c50LW1IGBQ9Xw/o.jpg',
        phone: '512-531-9541',
        address: '2110 S Congress Ave Austin, TX 78704'
    },
    {
        name: `Matt's El Rancho`,
        cuisine: 'Mexican',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/jQDnKe5ZMXb9sE7wvZ6Qnw/o.jpg',
        phone: '512-462-9333',
        address: '2613 S Lamar Blvd Austin, TX 78704'
    },
    {
        name: 'Asiana Indian Cuisine',
        cuisine: 'Indian',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/p-1nuzku7Y9Yvof3xpKifA/o.jpg',
        phone: '512-445-3435',
        address: '801 E William Cannon Dr Ste 205 Austin, TX 78745'
    },
    {
        name: `Tucci's Soutside Subs`,
        cuisine: 'Deli',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/DW5HlpF0C-rR5VtEvoRp0w/o.jpg',
        phone: '512-440-1850',
        address: '801 E William Cannon Dr Ste 240 Austin, TX 78745'
    },
    {
        name: 'Swedish Hill',
        cuisine: 'Cafe',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/nJ3uXUaVw3auMud24v5idA/o.jpg',
        phone: '512-472-1347',
        address: '1120 West 6th St Austin, TX 78703'
    },
    {
        name: 'Home Slice Pizza',
        cuisine: 'Pizza',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4wmXF0HIDEUdxPEB4Lyqjw/o.jpg',
        phone: '512-444-7437',
        address: '1415 S Congress St Austin, TX 78704'
    },
    {
        name: 'Paperboy',
        cuisine: 'American',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/1x1T5YtxtFJuVhPX4yRl7A/o.jpg',
        phone: '512-910-3010',
        address: '1203 E 11th St Austin, TX 78702'
    },
    {
        name: 'Better Half Coffee & Cocktails',
        cuisine: 'Cafe',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/KzMB3-oeqw11KBfgSRSCGg/o.jpg',
        phone: '512-645-0786',
        address: '406 Walsh St Austin, TX 78703'
    },
    {
        name: 'Aba',
        cuisine: 'Mediterranean',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/UnMKIIxfw1u7Vv-SS9IEow/o.jpg',
        phone: '737-273-0199',
        address: '1011 S Congress Ave Bldg 2, Ste 180 Austin, TX 78704'
    },
    {
        name: 'Kinda Tropical',
        cuisine: 'Tropical',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lnh1mNTlTctLIyfVfOpuOQ/o.jpg',
        phone: '512-373-8430',
        address: '3501 E 7th St Austin, TX 78702'
    },
    {
        name: 'Comedor',
        cuisine: 'Mexican',
        location: 'Austin, TX',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/8ewjuqXEKJMT958FvEJoTA/o.jpg',
        phone: '512-499-0977',
        address: '501 Colorado St Austin, TX 78701'
    }
]

Restaurant.deleteMany({})
.then( ()=>{
    return Restaurant.insertMany(restaurants)
})
.then ((insertedRestaurants)=>{
    console.log(insertedRestaurants)
})
.catch( err => console.error(err))
.finally(()=>{
    process.exit()
})