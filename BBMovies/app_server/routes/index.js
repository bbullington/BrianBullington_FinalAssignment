var express = require('express');
var router = express.Router();


/* stores a call to controller file as a variable */

var ctrlLogin = require('../controllers/login.js');
var ctrlMyMovies = require('../controllers/myMovies.js');
var ctrlMovieList= require('../controllers/movieList.js');







/* routes Get commands to call on particular export functionality from export file */

router.get('/', ctrlLogin.renderLogin);
router.get('/myMovies', ctrlMyMovies.renderUserMovies);
//router.get('/movieList.js', ctrlMovieList.renderMovieList);

router.get('/allMovies', ctrlMovieList.showMeTheList);

//router.get('/myMovies/:userID', ctrlMyMovies.renderSpecificUserMovies(userID)); starting attempt to get call to specific user in here

//trying to get an angular page to load. Unsuccessful so far
// router.get('/angularHome',function(req,res){
//     res.sendFile("Login1.htmll", {'root': "app_client"}); //load the single view file
// });




// router.route('/userMovies/:userID')
//     .get(function(req, res, next){          //works, but returns array
//         MongoClient.connect(url, function(err, db){
//             console.log("trying to get the userlist for...");
//             console.log(req.params.userID);
//             if(err) throw err;
//             var dbo=db.db("moviesDb");
//             try{
//                 var activeUser= new mongo.ObjectID(req.params.userID);
//             }
//             catch(err) {
//                 res.send(err)
//                 //document.getElementById("demo").innerHTML = err.message;
//                 return;
//             };
// //            activeUser= req.params.userID;
//             //res.send(activeUser);    //test
// //            dbo.collection("users").find({"UserName": req.params.userID}).toArray(function(err, result){
//             dbo.collection("users").find({"_id" : activeUser}).toArray(function(err, result){
//                 if(err) throw err;
//                 console.log(result);
//                 res.send(result);
//                 //res.send(HopefullyPacificRim);
//                 db.close();
//             });
//
//         });
//     });















module.exports = router;








//var ctrlItems = require('../controllers/items');
//router.get('/', ctrlItems.itemList);
