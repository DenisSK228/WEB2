const express = require('express');

const app = express();
// const router = express.Router();

app.use(function (req, res, next) {
    // res.send('Добро пожаловать');
    console.log('Тревога! Задний проход!');
    next();
})

app.use('/math/:a/:b', function(req, res){
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    res.send('Сумма чисел ${a} и ${b} равна ${a+b}')
});

app.get('/', function (req, res) {
    // res.setHeader('Content-Type', 'text/html')
    res.sendFile(__dirname + "/index1.html");
});


app.get('/about', function (req, res) {
    res.send('Вы человек, достаточно кратко?')
});

app.use(function (req, res) {
    res.sendStatus(404);
    res.send('lol')
});

app.listen(port = 3000, function () {
    console.log("Server on...");
});