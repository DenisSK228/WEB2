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
            "p_cost": "110",
            "p_id":"Сок Добрый"
        },
        "product_2": {
            "p_image": "tarhun.webp",
            "p_name": "Напиток ТАРХУН 1.0л",
            "p_cost": "75",
            "p_id":"Тархун"
        },
        "product_3": {
            "p_image": "chocolate.webp",
            "p_name": "Шоколад Бабаевский, элитный, 75% какао, 200 г",
            "p_cost": "120",
            "p_id":"Бабаевский"
        }
    }

}

let cart = {

}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/templates/index.html")
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

app.get("/log", function (req, res) {
    res.sendFile(__dirname + "/templates/login.html")
})

app.get("/reg", function (req, res) {
    res.sendFile(__dirname + "/templates/registration.html")
})



app.listen(1337, function () {
    console.log("Сервер запущен");
})
