// //this whole page may have no purpose right now.
//
// var express = require('express');
// var router= express.Router();
// var Note= require('../models/movies');
// var mongoose = require('mongoose');
// var MongoClient= require('mongodb').MongoClient;
// var url= "mongodb://localhost:27017/moviesDb";
//
// var movieID = "5ab34966391a2ef9b365415b";    //ID for Pacific Rim2
// var Movie = mongoose.model('Movie');
//
// console.log("made it to findMovieByID");
//
//
// module.exports.findOneMovie= function(req, res) {
//     console.log("got to controller findMoviebyID")
//     MongoClient.connect(url, function(err, db){
//         console.log("trying to get the userlist");
// }
//
//     // if(err) throw err;
//     // var dbo=db.db("moviesDb");
//     // dbo.collection("users").find({}).toArray(function(err, result){
//     //     if(err) throw err;
//     //     console.log(result);
//     //     res.send(result);
//     //     //res.send(HopefullyPacificRim);
//     //     db.close();
//     //     });
//     });





// module.exports.findOneMovie= function(req, res){
//     Movie
//         .findById(movieID)
//         .exec(function(err, returnedMovie){
//             sendJsonResponse(res, 200, returnedMovie);
//             console.log("findByID complete");
//         //console.log(HopefullyPacificRim);
//         }
//         );
// };