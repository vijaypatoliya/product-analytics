const userViewModel = require('../models/userView')

/** DB connection */
require('../models/index')

const getRandomDate = (from, to) => {
  from = from.getTime()
  to = to.getTime()
  return new Date(from + Math.random() * (to - from))
}

/** Popuplate records for userview logs */
const records = []
const randomStartDate = new Date('2018-10')
const randomEndDate = new Date()

for (let productId = 1; productId <= 1000; productId++) {
  for (let userId = 1; userId <= 200; userId++) {
    records.push({
      productId,
      userId,
      viewDate: getRandomDate(randomStartDate, randomEndDate)
    })
  }
}

userViewModel.insertMany(records, (error) => {
  if (error) {
    console.log(`Error during inserting`)
  } else {
    console.log(`Logs inserted successfully`)
  }
  process.exit(0)
})
