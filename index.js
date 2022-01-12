/*
* Primary file for the timeup monitoring application API.
* 
*
*/
// Dependencies
const http = require('http');
const server = http.createServer((req,res  )=>{
    res.end("Welcome jewel server created successfully!");
});
server.listen("3000",()=>{
    console.log("your server is working property now run your server execution!");
})
