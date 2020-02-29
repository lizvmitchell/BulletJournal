const Sequelize = require('sequelize')
const db = require('../db')

const Practice = db.define('practice', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Practice
