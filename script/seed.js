'use strict'

const db = require('../server/db')
const {User, Task, Practice, Day} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //users
  const user1 = await User.create({
    firstName: 'Cody',
    lastName: 'Dog',
    email: 'cody@email.com',
    password: '123'
  })

  const user2 = await User.create({
    firstName: 'Murphy',
    lastName: 'Cat',
    email: 'murphy@email.com',
    password: '123'
  })

  //days
  const day1 = await Day.create({month: 3, day: 15, year: 2020})
  const day2 = await Day.create({month: 3, day: 16, year: 2020})

  //tasks
  const task1 = await Task.create({name: 'Vacuum'})
  const task2 = await Task.create({name: 'Call Grandma'})
  const task3 = await Task.create({name: 'Groceries for Party'})

  await task1.setUser(user1)
  await task2.setUser(user1)
  await task3.setUser(user1)

  await task1.setDay(day1)
  await task2.setDay(day1)
  await task2.setDay(day1)

  const task4 = await Task.create({name: 'Lounge'})
  const task5 = await Task.create({name: 'Lick Toes'})
  const task6 = await Task.create({name: 'Harass Housemates'})

  await task4.setUser(user2)
  await task5.setUser(user2)
  await task6.setUser(user2)

  await task4.setDay(day2)
  await task5.setDay(day2)
  await task6.setDay(day2)

  //practices
  const practice1 = await Practice.create({name: 'Yoga'})
  const practice2 = await Practice.create({name: 'Track Nutrition'})
  const practice3 = await Practice.create({name: 'Read Half an Hour'})

  await practice1.setUser(user1)
  await practice2.setUser(user1)
  await practice3.setUser(user1)

  const practice4 = await Practice.create({
    name: 'Howl in the Middle of the Night'
  })
  const practice5 = await Practice.create({name: "Soil Neighbors' Yards"})
  const practice6 = await Practice.create({name: 'Stare Out Window'})

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
