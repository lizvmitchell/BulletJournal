const router = require('express').Router()
const {Practice} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const practices = await Practice.findAll({where: {userId: req.user.id}})
    res.send(practices)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name} = req.body
    await Practice.create({userId: req.user.id, name: name})
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

module.exports = router
