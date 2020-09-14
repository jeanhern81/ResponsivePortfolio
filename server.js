const express = require('express');
const sendMail = ('./mail');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 8080;

app.use(express.urlencoded ({
    extended: false
}));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



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


app.listen(PORT, () =>{
    console.log(`App is listening on port ${PORT}!`);
});