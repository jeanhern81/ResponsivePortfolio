const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

//console.log(process.env);

var api_key = process.env.varapi_key;
var domain = process.env.vardomain;


const auth = {
    auth: {
            "api_key": process.env.api_key,
            "domain": process.env.domain
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
    from: email,
    to: 'jeanette@thewebdevstudio.com',
    subject,
    text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        }   else {
            cb(null, data);
        }
    });
}


module.exports = sendMail;