'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let eventSchema = new Schema({
  id: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  title: {
    type: String,
    default: ''
  },
  start: {
    type: String,
    default: ''
  },
  end: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: "00:00:00"
  },
  userId: {
    type: String,
    default: ''
  },
  creatorId: {
    type: String,
    default: "admin"
  },
  creatorName: {
    type: String,
    default: "admin"
  }
})


mongoose.model('Event', eventSchema);