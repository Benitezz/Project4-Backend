const router = require('express').Router()
const favoriteCtrl = require('../controller/favoriteCtrl')


router.get('/', favoriteCtrl.index)
router.get('/:id', favoriteCtrl.getFavorite)
router.post('/', favoriteCtrl.createFavorite)
router.put('/:id', favoriteCtrl.updateFavorite)
router.delete('/:id', favoriteCtrl.deleteFavorite)

module.exports = router