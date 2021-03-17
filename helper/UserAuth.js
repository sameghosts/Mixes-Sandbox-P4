// json web token dependency 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const lodash = require('lodash');

const issueToken = async (user) => {
  let token = jwt.sign(
    user, 
    process.env.JWT_SECRET,
    {expiresIn: '2000m'}
  )
  return `Bearer ${token}`;
}

const serializedUser = (user) =>{
  lodash.pick(user, ['id', 'username', 'email']);
}

module.exports = { issueToken, serializedUser };