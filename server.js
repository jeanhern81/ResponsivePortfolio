const express = require('express');
//const sendMailTransport = require('nodemailer/lib/sendmail-transport');
const sendMail = require('./mail');
const log = console.log;
const path = require('path');

require('dotenv').config()

console.log(process.env);

const app = express();
const PORT = process.env.PORT || '3001'

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

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


//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => 
    log("This app is listening on PORT: " + PORT + ".")); 

