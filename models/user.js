//TODO: Build Model

// Dependencies -> mongoose and set schema variable
const mongoose = require('mongoose');

//instantiate mongoose schema
const Schema = mongoose.Schema;


// Schema Options

// User Schema sub schemas
  // Profile? 
  const userProfile = new Schema({
    displayName: String,
    bio: String,
    profilePic: String,
    //! Following - this should be updated to a separate schema, which could allow private vs public 
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }],
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }]
  })

// User Schema 
const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
	email: {
		type: String,
		required: true,
		unique: true
	},
	// password: {
	// 	type: String,
	// 	required: true
	// },
  profile: [userProfile],
  userMixes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MixList'
  }],
  userCollection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MixList'
  }],


})

// module.exports model

module.exports = mongoos.model('User', userSchema)