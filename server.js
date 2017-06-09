var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

var port = process.env.PORT || 4000;

router.route('/Beards')
    .get(function (req, res) {
        var beards = fs.readFileSync("beardstyles.json");
        var beardstyles = JSON.parse(beards);

        res.send(beardstyles);
    });

router.get('/', function (req, res) {

    res.send({ hello: "Welcome to our API" });

});
//ROUTER REGISTERING
// all routes will be prefixed with /api
app.use('/api', router);

app.listen(port, function () {
    console.log("Gulp is up & running on port:" + port);
});