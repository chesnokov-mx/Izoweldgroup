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
app.get("/Machine", function (req, res) {
    res.sendFile(__dirname + "/html/Machine.html");
});

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
}))

const filePath = "./public/VIDEO/video.mp4";
const filePathMachine = "./public/VIDEO/izoweld.mp4"

const nodemailer = require('nodemailer')
app.post('/submit-form', (req, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'izoweldgroupmail@gmail.com',
            pass: 'izoweldgroupmail1!',
        },
    })
    let mailOptions = {
        from: 'izoweldgroupmail@gmail.com', // sender address
        to: 'izoweldgroupmail@gmail.com', // list of receivers
        subject: 'New Request', // Subject line
        html: "Email: " + req.body.email + "<br>" +
                "Name: " + req.body.name + "<br>" +
            "Phone number: " + req.body.num + "<br>" +
            "Message: " + req.body.msg
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error');
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
    })

    res.sendFile(__dirname + "/html/index.html");

})

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
app.get('/public/VIDEO/izoweld.mp4', (req, res) => {

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

    fs.stat(filePathMachine, (err, stat) => {
        if (err) {
            console.error(`File stat error for ${filePathMachine}.`);
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

            const fileStream = fs.createReadStream(filePathMachine, options);
            fileStream.on("error", error => {
                console.log(`Error reading file ${filePathMachine}.`);
                console.log(error);
                res.sendStatus(500);
            });

            fileStream.pipe(res);
        }
    });
});
app.get("/languages/eng.json", function (req, res) {
    const data = require(__dirname + "/js/languages/eng.json");
    res.json(data);

});
app.get("/languages/cz.json", function (req, res) {
    const data = require(__dirname + "/js/languages/cz.json");
    res.json(data);
});
app.get("/languages/de.json", function (req, res) {
    const data = require(__dirname + "/js/languages/de.json");
    res.json(data);
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
app.get("/SL.js", function (req, res) {
    res.sendFile(__dirname + "/js/SL.js");
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port 3000!");
});