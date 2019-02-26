/* File Name:books.js
 Author Name:Keya Gandhi
 Student Id:300964054
 Web App Name:My Favourite Books*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
