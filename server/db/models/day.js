const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  date: {
    type: Sequelize.DATE
  },
  dayName: {
    type: Sequelize.STRING
  },
  day: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  monthName: {
    type: Sequelize.STRING
  },
  month: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Day
