// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')

// Create a model class
let bookModel = mongoose.Schema({
  Name:String,
  Author:String,
  Published:String,
  Desciption:String,
  Price:Number
},
{
  collection:"Bio_books"
})

module.exports = mongoose.model('Book',bookModel)
