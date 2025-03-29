// import express from "express";
// import { add, sub } from "../test.js";
// import fs from "fs";
// const port = process.env.PORT || 4020;
// const app = express();
// const date = new Date();
// app.get('/data',(req,res)=>{
//     res.send("Hello");
//     console.log(req.headers)
// })
// app.use("/", (req, res) => {
//   res.send("hello");
// //   fs.appendFileSync('./userData.txt',date.toDateString()+"\n");
// //   console.log(fs.statSync('./userData.txt'))
// });
// app.listen(port, () => {
//   console.log("server listen : ", port);
// });
// console.log(add(1, 1));
// console.log(sub(1, 1));


// http server

import http from 'http';
const port = process.env.PORT||2000;
const  myServer = http.createServer((req,res)=>{
      switch (req.url) {
        case "/":
            res.end("Landing page");
            break;
        case "/about":
            res.end("About page");
            break;
        default:
            res.writeHead(404); // Set 404 status for unknown routes
            res.end("404 Not Found");
    }
    res.end('me hu http server')
})
myServer.listen(port,()=>{
    console.log("Server listen :",port)
})
