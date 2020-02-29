const User = require('./user')
const Task = require('./task')
const Practice = require('./practice')
const Day = require('./day')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Task)
Task.belongsTo(User)
User.hasMany(Practice)
Practice.belongsTo(User)

//  Task.hasMany(Day);
//  Day.belongsToMany(Task);

//  Practice.hasMany(Day);
//  Day.belongsToMany(Practice);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Task,
  Practice
}
