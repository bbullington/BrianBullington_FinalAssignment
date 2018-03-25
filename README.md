# Brian Bullington- Final Project v1

Goal: Angular front end for an app letting you see movie lists.

Functional as of now:

/               Login Page. This does not tie to any kind of a user database yet
/api/allUsers/   API to call all user information
/api/movieList  API to call all movie list data
/api/userMovies/:id  API that queries database with search and returns only the movies of a specific user
/myMovies       Generates a page of the movies for Brian (list gernerated with an API call and a user ID search, but which user is searched for is still hard coded. Also provides links to their IMDB page
/allMovies      List of all movies stored in the database, set up as links to their IMDB page

Links, including links to the api calls are in the headers for ease of navigation during work.


Test data:
Database: moviesDb
Collections:

users collection in [{"_id":"5ab34467391a2ef9b3654159","UserName":"Brian","Password":"test","Email":"test@test.com","watchlist":[{"id":"1","title":"Maverick","url":"http://www.imdb.com/title/tt0110478"},{"id":"2","title":"Sandlot","url":"http://www.imdb.com/title/tt0108037"},{"id":"3","title":"Leon","url":"http://www.imdb.com/title/tt0110413"}]},{"_id":"5ab34478391a2ef9b365415a","UserName":"Karen","Password":"testK","Email":"testK@test.com","watchlist":[{"id":"4","title":"Pacific Rim 2","url":"http://www.imdb.com/title/tt2557478"},{"id":"5","title":"Babes In Toyland","url":"http://www.imdb.com/title/tt0090683/"},{"id":"6","title":"50 First Dates","url":"http://www.imdb.com/title/tt0343660"}]}]
movies collection: [{"_id":"5ab34966391a2ef9b365415b","title":"Pacific Rim 2","url":"http://www.imdb.com/title/tt2557478"},{"_id":"5ab34970391a2ef9b365415c","title":"Babes In Toyland","url":"http://www.imdb.com/title/tt0090683/"},{"_id":"5ab34978391a2ef9b365415d","title":"50 First Dates","url":"http://www.imdb.com/title/tt0343660"},{"_id":"5ab34982391a2ef9b365415e","title":"Maverick","url":"http://www.imdb.com/title/tt0110478"},{"_id":"5ab3498a391a2ef9b365415f","title":"Sandlot","url":"http://www.imdb.com/title/tt0108037"},{"_id":"5ab34994391a2ef9b3654160","title":"Leon","url":"http://www.imdb.com/title/tt0110413"}]





Final 
Nonfunctional:

SPA: I have not had any luck with Angular. I have gone through 3-4 tutorials in the last week and tried to follow along with the book examples. It seems straightforward, but I was unsuccessful getting anything up and running in this app. I think I'm going to have to do a few Udemy beginning-to-end simple Angular apps in order to wrap my head around it.
If I am able to get something working the rest of the day, I'll upload a new version, but now for the sake of having a functional project to turn in, I am leaving it commented out.

Userlogin call. I do have the query available once I get the login figured out, but as of now I do not have the login page passing any information to be utilized in the movie list. Instead it is just a button indicating what will happen: redirection to the list of movies for Brian. That list is generated with the API call, but the user ID cannot be changed right now in that call.

Assignment 5. I was trying to finish the final assignment first, but I did not have time to get to assignment 5





Other challenges:
I have not been able to get Mongoose working for me when it comes to APIs. When I did get the database searches going, I couldn't get the "what I'm doing with that information" to delay enough to wait for the information. Instead the storing, the res.send or the console would only ever display the Promise. I have used alternative form to get to the "Get" api data. But this is definitely somethign I'll need to play around with more.

Please let me know if the git repository looks incomplete. I found that frequently when I committed from the command line, it would tell me that that certain files weren't included. I believe the final has all the necessary files, but if any appear missing let me know and I can zip them.
 

