const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const path = require('path');

//const sendMailTransport = require('nodemailer/lib/sendmail-transport');

require('dotenv').config()

console.log(process.env);

const app = express();
const port = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//email
app.post('/email', function(req, res) {
    //TODO:
    //send email here
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data){
        if(err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!' });
        }
    });

});




//ap listening
app.listen(port, () => 
    log("This app is listening on PORT: " + port + ".")); 

