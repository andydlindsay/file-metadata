var express = require('express');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/templates'));
app.set('views', path.join(__dirname, '/templates'));

app.post('/upload', upload.single('file'), function(req, res) {
    // console.log(req.file.size);
    var responseObj = {
        size: req.file.size
    };
    fs.unlink('./uploads/' + req.file.filename, function(err) {
        if (err) throw err;
        // console.log('successfully deleted ' + req.file.filename);
    });
    res.send(responseObj);
});

app.get('*', function (req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT, function () {
    console.log('app listening on port ' + process.env.PORT);
});