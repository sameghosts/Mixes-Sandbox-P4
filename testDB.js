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

// curl 'http://localhost:3001/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3001' --data-binary '{"query":"# Write your query or mutation here\nquery USER_LOGIN{\n  loginUser(username: \"test3\", password: \"123123123\"){\n    user{\n      id\n      username\n      email\n      avatar\n    }\n    token\n  }\n}\nmutation REGISTER_USER(\n    $email: String!,\n    $username: String!, \n    $password: String!,\n  \t$avatar: String\n  ) {\n    registerUser(\n    newUser: {\n      email: $email,\n      username: $username,\n      password: $password,\n      avatar: $avatar\n    }\n  ) {\n    token\n    user {\n      id\n      email\n      username\n    }\n  }\n}\n"}' --compressed