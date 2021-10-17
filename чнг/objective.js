const express = require('express');

const app = express();

app.use(function (req, res, next) {
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/math.html");
});

//1 задача:

app.get('/1', function (req, res) {
    let data = req.query;
    let a = data.a;
    let b = data.b;
    let answer = Number(a) + Number(b);
    res.send(String(answer))
});
app.listen(port = 7000, function () {
    console.log('server is on');
})

//2 задача:

let capitals = {
    'Russia': 'Moscow',
    'Ukraine': 'Kiev',
    'Grate Britian': 'London'
}

app.get('/2', function (req, res) {
    let data1 = req.query;
    let country = data1.country;
    if (country in capitals) {
        let capital = capitals[country]
        res.send("Capital of " + country + " is " + capital);
    } else {
        res.sendFile(__dirname + "/public/math.html");
    }
});

