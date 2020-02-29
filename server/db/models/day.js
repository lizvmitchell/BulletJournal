const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dayName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  calenderDay: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  monthName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  calendarMonth: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  calendarYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Day
