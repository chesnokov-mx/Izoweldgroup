// 'use strict'
//
// const http = require('http')
// const url = require('url')
// const fs = require('fs')
// const util = require('util');
//
// const server = http.createServer(function (req, res){
//     const urll = url.parse(req.url).pathname;
//
//
//
//
//
//     if (urll === '/' || urll === '/html/index.html'){
//         const text = fs.readFileSync('html/index.html', 'utf-8')
//         res.end(text)
//     }
//     if (urll === '/html/aboutus.html'){
//         const text = fs.readFileSync('html/aboutus.html', 'utf-8')
//         res.end(text)
//     }
//     if (urll === '/html/Contacts.html'){
//         const text = fs.readFileSync('html/Contacts.html', 'utf-8')
//         res.end(text)
//     }
//     if (urll === '/html/gallery.html'){
//         const text = fs.readFileSync('html/gallery.html', 'utf-8')
//         res.end(text)
//     }
//
//
//
//
//
//     if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'v'){
//         const svg = fs.readFileSync(normurl, )
//         res.writeHead(200, {"content-type" : "image/svg+xml"})
//         res.end(svg)
//     }
//     if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'n'){
//         const svg = fs.readFileSync(normurl, )
//         res.writeHead(200, {"content-type" : "image/png"})
//         res.end(svg)
//     }
//     if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'e'){
//         const svg = fs.readFileSync(normurl, )
//         res.writeHead(200, {"content-type" : "image/jpeg"})
//         res.end(svg)
//     }
//     if(normurl[normurl.length-1] === 'G' && normurl[normurl.length-2] === 'P'){
//         const svg = fs.readFileSync(normurl, )
//         res.writeHead(200, {"content-type" : "image/jpeg"})
//         res.end(svg)
//     }
//     if(normurl[normurl.length-1] === 'f'){
//         const svg = fs.readFileSync(normurl)
//         res.writeHead(200, {"content-type" : "image/gif"})
//         res.end(svg)
//     }
//
//     res.end()
// })
//
// server.listen(process.env.PORT || 3000);
// console.log('server started!')

const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});
app.get("/AboutUs", function (req, res) {
    res.sendFile(__dirname + "/html/aboutus.html");
});
app.get("/Gallery", function (req, res) {
    res.sendFile(__dirname + "/html/gallery.html");
});
app.get("/Contacts", function (req, res) {
    res.sendFile(__dirname + "/html/Contacts.html");
});


app.use(express.static(__dirname + '/public'));

app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const videoPath = "VIDEO/video.mp4";
    const videoSize = fs.statSync("VIDEO/video.mp4").size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.get("/sidemenu.js", function (req, res) {
    res.sendFile(__dirname + "/js/sidemenu.js");
});
app.get("/footer.js", function (req, res) {
    res.sendFile(__dirname + "/js/footer.js");
});
app.get("/FeedbackForm.js", function (req, res) {
    res.sendFile(__dirname + "/js/FeedbackForm.js");
});
app.get("/galleryLoadIN.js", function (req, res) {
    res.sendFile(__dirname + "/js/galleryLoadIN.js");
});


app.listen(3000, function () {
    console.log("Listening on port 3000!");
});