var request= require('request');



/* temporary hard coding of user movies database string */
// var brianMovieList = {
//     'UserName': 'Brian',
//     'Password': 'test',
//     'Email': 'test@test.com',
//     'watchlist': [
//         {
//             'id': '1',
//             'title': 'Maverick',
//             'url': 'http://www.imdb.com/title/tt0110478'
//         },
//         {
//             'id': '2',
//             'title': 'Sandlot',
//             'url': 'http://www.imdb.com/title/tt0108037'
//         },
//         {
//             'id':'3',
//             'title':"Leon",
//             'url': 'http://www.imdb.com/title/tt0110413'
//         }
//     ]
// };
//console.log(brianMovieList.Password);







//*****Get Localhost3000/userMovies/[Brian's ID]    Uses API and callbacks to produce page

//creates jade page using notesFromApi.jade, hard coded title for page, and using notesArray passed in
var renderMovieListFromApi2 = function(req, res, UserMovieArray){
    console.log('note array is...');
    console.log(UserMovieArray);
    res.render('myMovies.jade',
        {
            title: 'Notes List',
            sidebar: "Love movies? You may love our movie data blog: ",
            pageHeader: {
                title: 'Watch It, Watch It Good',
                strapline: 'You better watch your back... log of movies.'
            },
            //noteCollection: storednotes,
            movieCollection: UserMovieArray[0]
        }
    );
};

//connects to API at http://localhost:3000/api
var getMovieInfo2 = function (req, res, callback){
    console.log('getMoveInfo:');
    //console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/movieList";
    requestOptions = {
        url : 'http://localhost:3000/api/userMovies/5ab34467391a2ef9b3654159', //hard coded in to see Brian's movies
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            //console.log('made it to 1');
            callback(req, res, body);
            //console.log(err, body);
            console.log('made it to callback and body = mongo data');
        }
    );
};

module.exports.renderUserMovies=function(req, res)
{
    getMovieInfo2(req, res, function (req, res, responseData) {
            renderMovieListFromApi2(req, res, responseData);
        }
    );
};

// failed attempt to get individual user id passed through
// module.exports.renderSpecificUserMovies=function(req, res, userID)
// {
//     getMovieInfo2(req, res, function (req, res, responseData) {
//             renderMovieListFromApi2(req, res, responseData);
//         }
//     );
// };



// end /notes