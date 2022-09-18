const router = require('express').Router()
const restaurantCtrl = require('../controller/restarauntCtrl')


router.get('/', restaurantCtrl.index)
router.get('/:id', restaurantCtrl.getRestaurant)
router.post('/', restaurantCtrl.createRestaraunt)
router.put('/:id', restaurantCtrl.updateRestaurant)
router.delete('/:id', restaurantCtrl.deleteRestaurant)

module.exports = router