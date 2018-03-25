var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var movieSchema = mongoose.Schema({
//    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
//    genre: [String],
    url: String
});

var userSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true},
    password: String,
    Email: String,
    watchlist: [String]
});


mongoose.model('Movie', movieSchema, 'movies');   //name of model, schemafunction to use, name of mongoDB databas
mongoose.model('User', userSchema, 'users');