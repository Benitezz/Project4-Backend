const Restaraunt = require('../model/Restaurant')

const index = (req,res) =>{
    Restaraunt.find({}, (err, restaurants) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        
        res.json(restaurants)
    })
}

const createRestaraunt = async (req,res) =>{
    
    let newRestaraunt = await Restaraunt.create(req.body)

    res.json(newRestaraunt)
}

const deleteRestaurant = (req,res) => {
    let {id} = req.params

    Restaraunt.findByIdAndDelete(id, (err, deletedRestaraunt) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deletedRestaraunt)
    })
}

const getRestaurant = (req,res) =>{
    Restaraunt.findById(req.params.id, (err, restaurant) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(restaurant)
    })
}

const updateRestaurant = (req,res) =>{
    Restaraunt.findByIdAndUpdate(req.params.id, req.body, (err, restaraunt) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        Restaraunt.find({}, (error, restaruants) =>{
            res.json(restaruants)
        })
    })
}

module.exports = {
    index,
    createRestaraunt,
    deleteRestaurant,
    getRestaurant,
    updateRestaurant
}