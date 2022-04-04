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



const filePath = "./public/VIDEO/video.mp4";

app.get('/works-in-chrome-and-safari', (req, res) => {

    const options = {};

    let start;
    let end;

    const range = req.headers.range;
    if (range) {
        const bytesPrefix = "bytes=";
        if (range.startsWith(bytesPrefix)) {
            const bytesRange = range.substring(bytesPrefix.length);
            const parts = bytesRange.split("-");
            if (parts.length === 2) {
                const rangeStart = parts[0] && parts[0].trim();
                if (rangeStart && rangeStart.length > 0) {
                    options.start = start = parseInt(rangeStart);
                }
                const rangeEnd = parts[1] && parts[1].trim();
                if (rangeEnd && rangeEnd.length > 0) {
                    options.end = end = parseInt(rangeEnd);
                }
            }
        }
    }

    res.setHeader("content-type", "video/mp4");

    fs.stat(filePath, (err, stat) => {
        if (err) {
            console.error(`File stat error for ${filePath}.`);
            console.error(err);
            res.sendStatus(500);
            return;
        }

        let contentLength = stat.size;

        if (req.method === "HEAD") {
            res.statusCode = 200;
            res.setHeader("accept-ranges", "bytes");
            res.setHeader("content-length", contentLength);
            res.end();
        }
        else {
            let retrievedLength;
            if (start !== undefined && end !== undefined) {
                retrievedLength = (end+1) - start;
            }
            else if (start !== undefined) {
                retrievedLength = contentLength - start;
            }
            else if (end !== undefined) {
                retrievedLength = (end+1);
            }
            else {
                retrievedLength = contentLength;
            }

            res.statusCode = start !== undefined || end !== undefined ? 206 : 200;

            res.setHeader("content-length", retrievedLength);

            if (range !== undefined) {
                res.setHeader("content-range", `bytes ${start || 0}-${end || (contentLength-1)}/${contentLength}`);
                res.setHeader("accept-ranges", "bytes");
            }

            const fileStream = fs.createReadStream(filePath, options);
            fileStream.on("error", error => {
                console.log(`Error reading file ${filePath}.`);
                console.log(error);
                res.sendStatus(500);
            });

            fileStream.pipe(res);
        }
    });
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




















app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port 3000!");
});