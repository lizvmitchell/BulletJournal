const router = require('express').Router()
const {Task} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({where: {userId: req.user.id}})
    res.send(tasks)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name} = req.body
    await Task.create({userId: req.user.id, name: name})
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

module.exports = router
