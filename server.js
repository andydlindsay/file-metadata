var express = require('express');
var path = require('path');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/templates'));
app.set('views', path.join(__dirname, '/templates'));

app.get('*', function (req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT, function () {
    console.log('app listening on port ' + process.env.PORT);
});