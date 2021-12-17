const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/static/"));
app.set("view engine", "hbs");
app.set("views", "./templates");

let data = {
    "products": {
        "product_1": {
            "p_image": "juice.webp",
            "p_name": "Нектар Добрый, мультифрукт, 2 л",
            "p_cost": "от 110p"
        },
        "product_2": {
            "p_image": "tarhun.webp",
            "p_name": "Напиток ТАРХУН 1.0л",
            "p_cost": "от 75p"
        },
        "product_3": {
            "p_image": "chocolate.webp",
            "p_name": "Шоколад Бабаевский, элитный, 75% какао, 200 г",
            "p_cost": "от 120p"
        }
    }

}

let cart = {

}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/templates/index.html")
});

app.get("a", function (req, res) {
    res.render('123')
});

app.get('/products/:ukn', function (req, res) {
    let a = req.params.ukn;
    let scs = data.products[a]
    res.render('Product.hbs', scs);
});

app.get("/cart", function (req, res) {
    res.render(__dirname + "/templates/Cart.hbs")
});

app.get("/pay", function (req, res) {
    res.render(__dirname + "/templates/Pay.hbs")
})


app.listen(1337, function () {
    console.log("Сервер запущен");
})
