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
            "  <a href=\"https://pjhdevs.io\"><img src=\"https://lh3.googleusercontent.com/16rleTu6jV30DoHr6jYpOjsr2cmDppu9qtGc4GMNSx6cZXjtQkbNl_K7zV_Rycl38hPcLN1UMGzZwEz8Gs365YcIPikivtL5AndE8sCF9qiYnKrWLzRGv4jEpc_y-j20skC4vy6Hlp4HKrsCBgpmDz6ixgvB7hylSgRPxKLVsI6i6X6w91200p0BLmIUcLu6Oqep4IlOYs6wag8wnq2vBT2r8TYtOGjxojAmA0G92xsJLsP9Je1jDycUAMo9ZH83z6TYswSK8lYxRg1JtVhI3tsJnyWHjcgyItqhZP0HnEMF_Ijyj8lkZWU9HcpPi-IycZ2N4HW11JEZIn5xXIHX5pM9Zx7ebvI_S3Uc3XZdNYaSGMOov_moEvpzM2hkURAD5h9xQrTb1EugnN-KQBO6TdGsdr8xshffkgShLuE1iZmqESbHqd-5vAfz7Iqtp-_oWKJKhYdSs9ROrf6ORAgYVQ2ws5_aoLMueM0M5RdnzwoUPNflkjVbUCEHZbWH3SkuLuRGsvBqfys6SOt38-wKOkxEso8arSJBL8vzuXNmS1LJsQ5Hh6iG_ecdvIcPavYprkoQZHFOdAxEQ8cZWABPJOkpqd245N5tvKZOgzNeQdLTn0xwntzR3zhfljthYCxWMctabVnvU1kNz7kE4IlcIv7oFVgNCfG0spv7y37eqJ8CoJeQxef_KWQLDj0=s750-no\" alt=\"Logo\" id=\"logo\" width=\"150\" height=\"150\"></a>\n" +
            "</header>\n" +
            "<div id=\"content\">\n" +
            "<br/>\n" +
            "  <div id=\"head\">\n" +
            "  <h1 id=\"title\">Your submission has been received!</h1>\n" +
            "  </div>\n" +
            "    <br/>\n" +
            "  <div id=\"message\">\n" +
            "  <p id=\"dear\">Dear "+`${idea.first_name}`+",</p>\n" +
            "  <br/>\n" +
            "  <p id=\"mainBody\">Thank you for choosing PJH Devs for your IT development needs. We're looking forward to\n" +
            "    working with you in building your idea.\n" +
            "  One of our developers will be contacting you via email to gather more information to help us develop your product.\n" +
            "    These questions will be along the lines of, \"Who is the intended audience?\", \"What are the main types of\n" +
            "    functionality you require?\",\n" +
            "  and other similar inquiries. Don't stress if you dont have the answers yet. Our developers are very talented and will talk about\n" +
            "    your idea with you to help you figure these things out.</p>\n" +
            "    <p>Finally, once the development team has approved the idea (once they have enough information to get started),\n" +
            "    we will contact you to go over the pricing\n" +
            "  and costs of the service. We do our best to give you a fair estimate on how much it will cost, although prices\n" +
            "    can vary depending on the resources required for the development.\n" +
            "  </p>\n" +
            "  <p id=\"closer\">We look forward to working with you and creating something great together!\n" +
            "    Thank you for choosing PJH Devs.</p>\n" +
            "  </div>\n" +
            "  </div>\n" +
            "\n" +
            "<footer>\n" +
            "  <a href=\"https://pjhdevs.io\"><img src=\"https://lh3.googleusercontent.com/16rleTu6jV30DoHr6jYpOjsr2cmDppu9qtGc4GMNSx6cZXjtQkbNl_K7zV_Rycl38hPcLN1UMGzZwEz8Gs365YcIPikivtL5AndE8sCF9qiYnKrWLzRGv4jEpc_y-j20skC4vy6Hlp4HKrsCBgpmDz6ixgvB7hylSgRPxKLVsI6i6X6w91200p0BLmIUcLu6Oqep4IlOYs6wag8wnq2vBT2r8TYtOGjxojAmA0G92xsJLsP9Je1jDycUAMo9ZH83z6TYswSK8lYxRg1JtVhI3tsJnyWHjcgyItqhZP0HnEMF_Ijyj8lkZWU9HcpPi-IycZ2N4HW11JEZIn5xXIHX5pM9Zx7ebvI_S3Uc3XZdNYaSGMOov_moEvpzM2hkURAD5h9xQrTb1EugnN-KQBO6TdGsdr8xshffkgShLuE1iZmqESbHqd-5vAfz7Iqtp-_oWKJKhYdSs9ROrf6ORAgYVQ2ws5_aoLMueM0M5RdnzwoUPNflkjVbUCEHZbWH3SkuLuRGsvBqfys6SOt38-wKOkxEso8arSJBL8vzuXNmS1LJsQ5Hh6iG_ecdvIcPavYprkoQZHFOdAxEQ8cZWABPJOkpqd245N5tvKZOgzNeQdLTn0xwntzR3zhfljthYCxWMctabVnvU1kNz7kE4IlcIv7oFVgNCfG0spv7y37eqJ8CoJeQxef_KWQLDj0=s750-no\" alt=\"Logo\" height=\"100\" width=\"100\"></a>\n" +
            "  <p id=\"emailSentTo\">This email was sent to: <a id=\"mailToLink\" href=\"mailto:\">"+`${idea.email}`+"</a></p>\n" +
            "  <p id=\"copyright\">&copy; 2020 PJH Devs LLC</p>\n" +
            "</footer>\n" +
            "</body>\n" +
            "</html>\n",
        onError: (e) => callback(e,null),
        onSuccess: (i) => callback(null,i)
    });


};


