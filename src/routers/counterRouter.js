const express = require('express')
const router = express.Router()
const {getAll, increment, decrement, clear, double} = require('../contorller/counterController.js')

let counter = 200

router.get('/', getAll)

router.post('/increment', increment)


router.post('/decrement', decrement)


router.delete('/', clear)


router.post('/double', double)

module.exports = router