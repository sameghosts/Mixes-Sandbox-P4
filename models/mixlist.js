// Dependencies -> mongoose and set schema variable
// Dependencies -> mongoose and set schema variable
const MONGOOSE = require('mongoose');

//instantiate mongoose schema
const Schema = MONGOOSE.Schema;

// Schema Options
const options = {
	timestamps: true,
}
// Mixlist subschema Schema
  // Track

const trackSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist:  {
    type: String,
    required: true
  },
  uri:  {
    type: String,
    required: true
  },
  imageUrl: String,
  featured: {
    type: Boolean,
    default: false
  }
})
  // Comments
  const commentSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    },
    body: String,
    dateCreated: {type: Date, default: Date.now()}
  })

// Mixlist Schema 
const mixListSchema = new Schema({
  name: String,
  user: [{
    type: MONGOOSE.Schema.Types.ObjectId,
    ref: 'User'
  }],
  authorDisplay: String,
  imageUrl: String,
  tagline: String,
  description: String,
  featuredText: String,
  tracks: [trackSchema],
  comments: [commentSchema]

}, options)

// module.exports model
module.exports = MONGOOSE.model('MixList', mixListSchema)