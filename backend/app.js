//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodejs-nodemailer-outlook");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("1");
});

app.post("/sendmail", (req, res) => {
    console.log("2");
    let idea = req.body;
    sendConfirmationMail(idea, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "3b" });
        } else {
            console.log("3a");
            res.send(info);
        }
    });

    sendIdeaMail(idea, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "4b" });
        } else {
            console.log("4a");
            res.send(info);
        }
    });

});

const sendIdeaMail = (idea, callback) => {
    nodemailer.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: "no-reply@pjhdevs.io",
            pass: "OfMice&Men2020??"
        },
        from: `"PJHDevs", "no-reply@pjhdevs.io"`,
        to: "pjsmith@pjhdevs.io, jcharrison@pjhdevs.io",
        subject: "Idea submission: " + `${idea.app_name}`,
        html:
            "<head>\n" +
            "  <meta charset=\"utf-8\">\n" +
            "  <title>PJH Devs</title>\n" +
            "  <meta name=\"description\" content=\"email\">\n" +
            "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "  <link rel=\"manifest\" href=\"https://pjhdevs.io\">\n" +
            "  <link href=\"https://fonts.googleapis.com/css2?family=Questrial&display=swap\" rel=\"stylesheet\">\n" +
            "  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,100&display=swap\" rel=\"stylesheet\">\n" +
            "</head>\n" +
            "<body style=\"background: #444444\">\n" +
            "  <table border=0 cellspacing=0 style=\"width: 100%; color: white;\">\n" +
            "  <tr>\n" +
            "  <td height=\"100\"style=\"text-align: center\" bgcolor=\"#444444\"><a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" id=\"logo\" width=\"150\" height=\"150\"></a></td>\n" +
            "  </tr>\n" +
            "  <tr>\n" +
            "  <td height=\"100\" style=\"text-align: center; font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 28px;\" bgcolor=\"#212121\">Your submission has been received!</td>\n" +
            "  <tr>\n" +
            "  <td height=\"150\" style=\"font-family: 'Roboto', sans-serif; font-weight: 100; font-size: 16px; padding:24px; line-height: 20px;\" bgcolor=\"#212121\">" +
            `${idea.first_name}`+ " " + `${idea.last_name}` + " has submitted the idea for software named " + `${idea.app_name}` + "<br/><br/>" +
            "The description for it is as follows: <br/><br/>" + `${idea.description}` + "<br/><br/>" +
            "Their contact info is: <br/><br/> Name: " + `${idea.first_name}` + " " + `${idea.last_name}` +
            "<br/>Phone Number: " + `${idea.phone_number}` + "<br/>" + "Email Address: " + `${idea.email}` +
            "</tr>\n" +
            " <tr>\n" +
            " <td height=\"100\" style=\"text-align: center\" bgcolor=\"#444444\"><a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" alt=\"Logo\" id=\"logo\" width=\"150\" height=\"150\"></a></td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</body>",
        onError: (e) => callback(e, null),
        onSuccess: (i) => callback(null, i)
    });
}

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
            html:
                "<head>\n" +
                "  <meta charset=\"utf-8\">\n" +
                "  <title>PJH Devs</title>\n" +
                "  <meta name=\"description\" content=\"email\">\n" +
                "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "  <link rel=\"manifest\" href=\"https://pjhdevs.io\">\n" +
                "  <link href=\"https://fonts.googleapis.com/css2?family=Questrial&display=swap\" rel=\"stylesheet\">\n" +
                "  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,100&display=swap\" rel=\"stylesheet\">\n" +
                "</head>\n" +
                "<body style=\"background: #444444\">\n" +
                "  <table border=0 cellspacing=0 style=\"width: 100%; color: white;\">\n" +
                "  <tr>\n" +
                "  <td height=\"100\"style=\"text-align: center\" bgcolor=\"#444444\"><a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" id=\"logo\" width=\"150\" height=\"150\"></a></td>\n" +
                "  </tr>\n" +
                "  <tr>\n" +
                "  <td height=\"100\" style=\"text-align: center; font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 28px;\" bgcolor=\"#212121\">Your submission has been received!</td>\n" +
                "  <tr>\n" +
                "  <td height=\"150\" style=\"font-family: 'Roboto', sans-serif; font-weight: 100; font-size: 16px; padding:24px; line-height: 20px;\" bgcolor=\"#212121\">Dear " +`${idea.first_name}`+ ",<br/><br/>Thank you for choosing PJH Devs " +
                "for your IT development needs. We're looking forward to working with you in building your idea.<br/><br/> One of our developers will be contacting " +
                    "you via email to gather more information to help us develop your product. These questions will be along the lines of, \"Who is the intended audience?\", " +
                    "\"What are the main types of functionality you require?\", and other similar inquiries. Don't stress if you dont have the answers yet. " +
                    "Our developers are very talented and will talk about your idea with you to help you figure these things out.<br/><br/>" +
                    "Finally, once the development team has approved the idea (once they have enough information to get started), " +
                    "we will contact you to go over the pricing and costs of the service. We do our best to give you a fair estimate on how much it will cost, " +
                    "although prices can vary depending on the resources required for the development.<br/><br/>" +
                    "We look forward to working with you and creating something great together! Thank you for choosing PJH Devs.<br/><br/></td>\n" +
                    "</tr>\n" +
                " <tr>\n" +
                " <td height=\"100\" style=\"text-align: center\" bgcolor=\"#444444\"><a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" alt=\"Logo\" id=\"logo\" width=\"150\" height=\"150\"></a></td>\n" +
                "</tr>\n" +
                "<tr>\n" +
                "<td style=\"font-family: 'Roboto', sans-serif; font-weight: 100; text-align: center; font-size: 10px;\" bgcolor=\"#444444\">This email was sent to: " +`${idea.email}`+ "<br/><br/>&copy; 2020 PJH Devs LLC</td>\n" +
                "</tr>\n" +
                "</table>\n" +
                "</body>",
            onError: (e) => callback(e,null),
            onSuccess: (i) => callback(null,i)
        });


};


