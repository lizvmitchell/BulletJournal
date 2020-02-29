const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Task
