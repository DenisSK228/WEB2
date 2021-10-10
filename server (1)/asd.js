const express = require('express');

const app = express();

app.use(function (req, res, next) {
    console.log('Тревога! Задний проход!');
    next();
})

app.use('/asd/:name/:year', function (req, res) {
    let name = 'lox';
    let year = '31.02.0001 до н. э.';
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index2.html");
});


app.get("/about", function (req, res) {
res.sendFile(__dirname + "/index3.html");
    console.log("ABOBA атакована!");
});


app.listen(port = 7000, function () {
    console.log("Server on...");
});