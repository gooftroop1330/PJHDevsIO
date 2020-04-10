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

    /** sendIdeaMail(idea, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    }); **/

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
        html: "<html class=\"no-js\" lang=\"en\">\n" +
            "\n" +
            "<head>\n" +
            "  <meta charset=\"utf-8\">\n" +
            "  <title>PJH Devs</title>\n" +
            "  <meta name=\"description\" content=\"email\">\n" +
            "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "\n" +
            "  <link rel=\"manifest\" href=\"https://pjhdevs.io\">\n" +
            "  <link href=\"https://fonts.googleapis.com/css2?family=Questrial&display=swap\" rel=\"stylesheet\">\n" +
            "  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,100&display=swap\" rel=\"stylesheet\">\n" +
            "  <meta name=\"theme-color\" content=\"#fafafa\">\n" +
            "  <style>\n" +
            "    header {\n" +
            "      background: #212121;\n" +
            "\n" +
            "      text-align: center;\n" +
            "    }\n" +
            "    #logo{\n" +
            "        margin-bottom: -70px;\n" +
            "    }\n" +
            "    #content\n" +
            "    {\n" +
            "      background: #444444;\n" +
            "      padding: 3rem;\n" +
            "    }\n" +
            "    body\n" +
            "    {\n" +
            "      background: #eeeeee;\n" +
            "      margin: 0;\n" +
            "      font-family: 'Roboto', sans-serif;\n" +
            "      font-weight: 500;\n" +
            "      color: #eeeeee;\n" +
            "    }\n" +
            "    footer\n" +
            "    {\n" +
            "      padding: 3rem;\n" +
            "      background: #212121;\n" +
            "      font-family: 'Roboto', sans-serif;\n" +
            "      font-weight: 100;\n" +
            "      text-align: center;\n" +
            "      font-size: 10px;\n" +
            "    }\n" +
            "    #mailToLink\n" +
            "    {\n" +
            "      color: darkorange;\n" +
            "    }\n" +
            "    #message\n" +
            "    {\n" +
            "      font-family: 'Roboto', sans-serif;\n" +
            "      line-height: 24px;\n" +
            "      font-weight: 100;\n" +
            "    }\n" +
            "    #head{\n" +
            "      text-align: center;\n" +
            "    }\n" +
            "  </style>\n" +
            "</head>\n" +
            "\n" +
            "<body>\n" +
            "<header>\n" +
            "  <a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" alt=\"Logo\" id=\"logo\" width=\"150\" height=\"150\"></a>\n" +
            "</header>\n" +
            "<div id=\"content\">\n" +
            "<br/>\n" +
            "  <div id=\"head\">\n" +
            "  <h1 id=\"title\">A new idea has been submitted!</h1>\n" +
            "  </div>\n" +
            "    <br/>\n" +
            "  <div id=\"message\">\n" +
            "  <p id=\"mainBody\">" + `${idea.first_name}` + " " + `${idea.last_name}` + " has submitted the idea for software named " + `${idea.app_name}` + "\n</p>" +
            "  <p>The description for it is as follows:\n " + `${idea.description}` + "</p>\n" +
            "  <p>Their contact info is:<br/> Name: " + `${idea.first_name}` + " " + `${idea.last_name}` + "<br/>Phone Number: " + `${idea.phone_number}` + "<br/>Email Address: <a id=\"mailToLink\" href=\"mailto:\">" + `${idea.email}` + "</a></p>" +
            "  </div>\n" +
            "  </div>\n" +
            "\n" +
            "<footer>\n" +
            "  <a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" alt=\"Logo\" height=\"100\" width=\"100\"></a>\n" +
            "  <p id=\"copyright\">&copy; 2020 PJH Devs LLC</p>\n" +
            "</footer>\n" +
            "</body>\n" +
            "</html>\n",
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
                "  <link rel=\"manifest\" href=\"https://pjhdevs.io\">\n" +
                "  <link href=\"https://fonts.googleapis.com/css2?family=Questrial&display=swap\" rel=\"stylesheet\">\n" +
                "  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,100&display=swap\" rel=\"stylesheet\">\n" +
                "</head>\n" +
                "<body style=\"margin-right:15%; margin-left:15%;\">\n" +
                "  <table border=0 cellspacing=0 cellpadding=\"75px\" style=\"width: 100%; color: white;\">\n" +
                "  <tr>\n" +
                "  <td height=\"100\"style=\"text-align: center\" bgcolor=\"#444444\"><a href=\"https://pjhdevs.io\"><img src=\"https://i.imgur.com/rWhQkPE.png\" alt=\"Logo\" id=\"logo\" width=\"150\" height=\"150\"></a></td>\n" +
                "  </tr>\n" +
                "  <tr>\n" +
                "  <td height=\"75\" style=\"text-align: center; font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 36px;\" bgcolor=\"#212121\">Your submission has been received!</td>\n" +
                "  <tr>\n" +
                "  <td height=\"150\" style=\"font-family: 'Roboto', sans-serif; font-weight: 100; font-size: 20px;\" bgcolor=\"#212121\">Dear " +`${idea.first_name}`+ ",<br/><br/>Thank you for choosing PJH Devs " +
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


