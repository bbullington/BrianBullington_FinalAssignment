var express = require('express');
var router= express.Router();
var MongoClient= require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/moviesDb";
var mongo= require('mongodb');
var app= express();  //added based on scotch.io

//var ctrlNotes= require('../controllers/userMovies.js');
var Note= require('../models/movies');
var mongoose = require('mongoose');

var Movie = mongoose.model('Movie');

var movieID = "5ab34966391a2ef9b365415b";    //ID for Pacific Rim2


//var HopefullyPacificRim =

// Movie.findById(movieID).exec(function(err, returnedMovie){
//     console.log("findByID complete");
//     //console.log(HopefullyPacificRim);
// });

//console.log(HopefullyPacificRim);


    /*Note: html requests to '/api' come here as '/'    */

console.log('made it to api-routes-index');


/* routes Get commands to call on particular export functionality from export file */



//this code was functional at returning an array of all movies
router.route('/movieList')
    .get(function(req, res, next){          //works, but returns array
        MongoClient.connect(url, function(err, db){
            console.log("trying to get the userlist");
            if(err) throw err;
            var dbo=db.db("moviesDb");
            dbo.collection("movies").find({}).toArray(function(err, result){
                if(err) throw err;
                console.log(result);
                res.send(result);
                //res.send(HopefullyPacificRim);
                db.close();
            });

        });
    });

router.route('/allUsers')
    .get(function(req, res, next){          //works, but returns array
        MongoClient.connect(url, function(err, db){
            console.log("trying to get the userlist");
            if(err) throw err;
            var dbo=db.db("moviesDb");
            dbo.collection("users").find({}).toArray(function(err, result){
                if(err) throw err;
                console.log(result);
                res.send(result);
                //res.send(HopefullyPacificRim);
                db.close();
            });

        });
    });


router.route('/userMovies/:userID')
    .get(function(req, res, next){          //works, but returns array
        MongoClient.connect(url, function(err, db){
            console.log("trying to get the userlist for...");
            console.log(req.params.userID);
            if(err) throw err;
            var dbo=db.db("moviesDb");
            try{
                var activeUser= new mongo.ObjectID(req.params.userID);
            }
            catch(err) {
                res.send(err)
                //document.getElementById("demo").innerHTML = err.message;
                return;
            };
//            activeUser= req.params.userID;
            //res.send(activeUser);    //test
//            dbo.collection("users").find({"UserName": req.params.userID}).toArray(function(err, result){
            dbo.collection("users").find({"_id" : activeUser}).toArray(function(err, result){
            if(err) throw err;
                console.log(result);
                res.send(result);
                //res.send(HopefullyPacificRim);
                db.close();
            });

        });
    });



// router.route('/new')
//     .get(function(req, res, next){          //works, but returns array
//         console.log('you clicked get');
//         data1= Movie.find({});
//         console.log(data1);
//         res.json(data1)
//             // console.log("made it into app.get");
//             // const results= Movie.find({});
//             // console.log(results);
//             //
//             // if (err)
//             //     res.send(err)
//             // res.json(movies)
//
//     });





module.exports = router;














     // .post(function(req, res){
     //    var newNote= new Note();
     //    newNote.Username = req.body.name;
     //    newNote.save(function(err){
     //        if (err)
     //            res.send(err);
     //        res.json({message: "New note created"});
     //    });


//        res.json({message: 'you made it to the post again!'});

    // });










/*Ben's Bid Code */


// var express = require('express');
// var router = express.Router();
// var ctrlItems = require('../controllers/items');
// var ctrlBids = require('../controllers/bids');
//
// router.get('/items', ctrlItems.itemsForBid);
// router.post('/items', ctrlItems.itemsCreate);
// router.get('/items/:itemId', ctrlItems.itemsReadOne);
// router.put('/items/:itemId', ctrlItems.itemsUpdateOne);
// router.delete('/items/:itemId', ctrlItems.itemsDeleteOne);
//
// // reviews
// router.post('/items/:itemId/bids', ctrlBids.bidsCreate);
// router.get('/items/:itemId/bids/:bidId', ctrlBids.bidsReadOne);
// router.put('/items/:itemId/bids/:bidId', ctrlBids.bidsUpdateOne);
// router.delete('/items/:itemId/bids/:bidId', ctrlBids.bidsDeleteOne);
//
// module.exports = router;
