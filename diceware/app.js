//Using express (library) makes setting up the server easier since it has many shortcut methods.
//need to install express (npm install express --save)
var express = require('express');
//body-parse allows us to easily capture form values when receiving a request.
//this is installed using the command 'npm install body-parser --save'
//using the '--save' flag adds this library to our list of dependencies in the package.json file.
//assign it to the var bodyParser
var bodyParser = require('body-parser');


//create an app that includes express
var app = express();

//using EJS templating engine to build the pages before sending them back to the browser
//this is installed using the comand 'npm install ejs --save'
//using the 'save' flag adds this library to our list of dependencies in the package.json file.
app.set('view engine', 'ejs');   //points to views directory ejs require a directory named views

//include body parser to read post request
//tell the app to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//calling the render method (request, response)
app.get('/', function(req,res){
    res.render('pages/index');
});

app.get('/roll', function(req,res){
    res.render('pages/roll');
});

app.post('/rolled', function(req,res){
    var theNumber = '';
    for (var key in req.body){
        if(req.body.hasOwnProperty(key)){
            theNumber += req.body[key];
        }
    }

    console.log(theNumber);
    res.render('pages/rolled',{
        rolledNumber: theNumber
    });
});

app.get('/lazyRoll', function(req,res){
    res.render('pages/lazyRoll');
});

//listen on port 3000
app.listen(3000, function(){
    console.log('Example app listening on port 3000.');
});