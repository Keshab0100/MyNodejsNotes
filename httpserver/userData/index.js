// const fs = require('fs');
// const http = require('http')
// // To create a webserver in nodejs we must use a method http.createServer() 
// // which includes two parameters request and response parameter

// const server = http.createServer((req, res) => {

//     const data = fs.readFileSync('/userApi.json', "utf-8");
//     const objData = JSON.parse(data);

//     // console.log(req.url)
//     if(req.url == "/"){
//         res.end("hello from the other side");
//     }
//     else if(req.url == "/contactUs"){
//         res.end("it is still on work")
//     }
//     else if(req.url == "/home"){
//         res.end("it is still on work: Home")
//     }
//     else if(req.url == "/aboutUs"){
//         res.end("it is still on work: aboutUs")
//     }
//     else if(req.url == "/userAPI"){
//         res.writeHead(200, {"content-type" : "application/json"})
//         res.end(objData)
//     }
//     else{
//         res.writeHead(404, {"Content-type" : "text/html"});
//         res.end("Error page not found")
//     }
// }).listen(8000);

// server.listen(8000, "192.168.1.86", () => {
//     console.log("listening to the port: 8000");
// });
