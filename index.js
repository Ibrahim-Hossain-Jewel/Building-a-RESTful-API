/*
* Primary file for the timeup monitoring application API.
* 
*
*/
// Dependencies
const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res ){
    //Get the url and parse it.
    const parseUrl = url.parse(req.url,true);
    //Get the pathname from parseUrl.
    const path = parseUrl.pathname;
    //Get the trimmed name here.
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    //Now parse the HTTP Method here.
    const method = req.method.toLowerCase();
    //Now parsing query string here.
    const parsingQueryString = JSON.stringify(parseUrl.query);
    console.log('Your client pathname is : ' + trimmedPath + " And your method is " + method + " along with these query string parameters : " + parsingQueryString);
    res.end("Welcome to our uptime monitoring application" );
    
});
server.listen("3000",function(){
    console.log("your server is working property now run your server execution!");
})
