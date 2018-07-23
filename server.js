var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render("index");
});

app.listen(3000, function(){
    console.log("Server Started at 3000...");
});

// const http = require('http');
// const fs = require('fs');

// fs.readFile('index.html', (err, html)=>{
//     if(err){
//         throw err;
//     }

//     const hostname = '127.0.0.1';
//     const port = 3000;
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type','text/html');
//         res.write(html);
//         res.end();
//     });
    
//     server.listen(port, hostname, () => {
//         console.log('Server started on prt ' + port);

//     });
// });