const express = require('express');

const app = express();

let users = {
    '|$$_admin_$$|': 'admin',
    'maks': 'выпедрежник',
    'DenisSK': '929183neD'
}

app.use(function (req, res, next) {
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/test', function (req, res) {
    let data = req.query;
    let login = data.login
    let pass = data.password
    if (login in users) {
        if (users[login] == pass) {
            res.send("Допро пожаловать, |$$_admin_$$|")
        } else {
            res.sendStatus(418);
        }
    } else {
        res.sendStatus(418);
    };

});

app.get('/:page', function (req, res) {
    let file = req.params.page + ".html";
    res.sendFile(__dirname + "/public/" + file)
    // console.log(req);
});

app.listen(port = 3000, function () {
    console.log('server is on');
})