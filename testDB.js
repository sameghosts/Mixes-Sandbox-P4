const DB = require('./models')

DB.User.create({
  userName: 'sameghosts',
  email: 'seanfeiner.brown@gmail.com'
}).then(user => {
  console.log('🎃 Successfully created a user!')
  console.log(user)
  process.exit()
}).catch(err => {
  console.log('👹 error creating user:\n${err}')
  process.exit()
})