const express = require('express');


const app = express();

app.use(express.static('public'))

app.set('view engine', 'pug');

app.use( date = (req,res,next) => {
    let today = new Date();
    let day = today.getDay();
    let time = today.getHours();

    if ((time<17 && time>9) && (day>0 && day<6)) {next();}
    else {res.render('error');}
});

/*app.use( date =(req,res,next) => {
    var today = new Date();
    var day = today.getDay();
    var time = today.getHours();
    console.log(time);

});*/


app.get('/home', (req,res) => {
    res.render('home');
});

app.get('/services', (req,res) => {
    res.render('services');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.listen(3000, (err) => {
    if(err) console.log('Server is not running');
    else console.log('Server is running on port 3000');
})