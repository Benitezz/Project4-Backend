const Favorite = require('../model/Favorites')

const index = (req,res) =>{
    Favorite.find({}, (err, favorites) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        
        res.json(favorites)
    })
}

const createFavorite = async (req,res) =>{
    
    let newFavorite = await Favorite.create(req.body)

    res.json(newFavorite)
}

const deleteFavorite = (req,res) => {
    let {id} = req.params

    Favorite.findByIdAndDelete(id, (err, deletedFavorite) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deletedFavorite)
    })
}

const getFavorite = (req,res) =>{
    Favorite.findById(req.params.id, (err, favorite) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(favorite)
    })
}

const updateFavorite = (req,res) =>{
    Favorite.findByIdAndUpdate(req.params.id, req.body, (err, favorite) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        Favorite.find({}, (error, favorite) =>{
            res.json(favorite)
        })
    })
}

module.exports = {
    index,
    createFavorite,
    deleteFavorite,
    getFavorite,
    updateFavorite
}