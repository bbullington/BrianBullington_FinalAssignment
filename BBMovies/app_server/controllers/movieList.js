var request= require('request');  //from notes... but can't remember why



var renderMovieList = function(req, res, movieArray){
    res.render('movieList.jade',
        {
            title: 'BBFlix Movie List:',
            sidebar: "Build your own blockbuster: ",
            pageHeader: {
                title: "Watch 'em aYour Note Library",
                strapline: 'Using API and Callback'
            },
            movieList: movieArray
        }
    );
    console.log("here is the movie array::::");
    console.log(movieArray);
};


var getMovieListFromApi = function (req, res, callback){
    console.log('getting all the movies');
//    console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/movieList";
    requestOptions = {
        url : 'http://localhost:3000/api/movieList',
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            //console.log('made it to 1');
            callback(req, res, body);
            console.log(err, body);
            console.log('made it to callback and body = mongo data');
        }
    );
};


module.exports.showMeTheList=function(req, res)
{
    getMovieListFromApi(req, res, function (req, res, responseData) {
            renderMovieList(req, res, responseData);
        }
    );
};














var renderNotesListFromApi2 = function(req, res, noteArray){
    res.render('notesFromApi.jade',
        {
            title: 'Notes List',
            sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
            pageHeader: {
                title: 'Your Note Library',
                strapline: 'Using API and Callback'
            },
            noteCollection: noteArray
        }
    );
};

//connects to API at http://localhost:3000/api
var getNoteInfo2 = function (req, res, callback){
    console.log('getNoteInfo:');
    console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/";
    requestOptions = {
        url : 'http://localhost:3000/api/',
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            //console.log('made it to 1');
            callback(req, res, body);
            console.log(err, body);
            console.log('made it to callback and body = mongo data');
        }
    );
};

module.exports.noteListFromApiRender=function(req, res)
{
    getNoteInfo2(req, res, function (req, res, responseData) {
            renderNotesListFromApi2(req, res, responseData);
        }
    );
};
