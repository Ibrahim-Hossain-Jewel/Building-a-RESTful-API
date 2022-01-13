/*
* Primary file for the timeup monitoring application API.
* 
*
*/
// Dependencies
const http = require('http');
const url = require('url');

const server = http.createServer((req,res  )=>{
    //Get the url and parse it.
    const parseUrl = url.parse(req.url,true);
    //Get the pathname from parseUrl.
    const path = parseUrl.pathname;
    //Get the trimmed name here.
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    
    res.end("Your client pathname is : " + trimmedPath );
});
server.listen("3000",()=>{
    console.log("your server is working property now run your server execution!");
})
