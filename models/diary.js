const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  image: String,
  text: String,
});


module.exports = mongoose.model('Diary', diarySchema);
