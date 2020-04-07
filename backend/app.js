//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodejs-nodemailer-outlook");

// create a new Express application instance 
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors());
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
    console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
    console.log("request came");
    let idea = req.body;
    sendConfirmationMail(idea, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

const sendConfirmationMail = (idea, callback) => {
    nodemailer.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: "no-reply@pjhdevs.io",
            pass: "OfMice&Men2020??"
        },
        from: `"PJHDevs", "no-reply@pjhdevs.io"`,
        to: `${idea.email}`,
        subject: `${idea.app_name}`,
        html: "<h1>The backend service works</h1>",
        onError: (e) => callback(e,null),
        onSuccess: (i) => callback(null,i)
    });


};


