const express = require("express");
const hbs = require("hbs")
const app = express();

app.set("view engine", "hbs");
app.set("views", "./templates");
hbs.registerPartials(__dirname + "/templates/partials");

data = {
    "users": {
        "user1": {
            "avatar": '<img src="" alt="123">',
            "nickname": "alexeysuzdal3376",
            "lvl": "2",
            "bank": "145",
            "inv": "4",
            "invent": "/inventories/inv1"
        },
        "user2": {
            "avatar": "<img src=''>",
            "nickname": "VladikOlaDik",
            "lvl": "13",
            "bank": "7565",
            "inv": "42",
            "invent": "/inventories/inv2"
        },
        "user3": {
            "avatar": "<img src=''>",
            "nickname": "Xaker777",
            "lvl": "999",
            "bank": "99999979834759380",
            "inv": "6481",
            "invent": "/inventories/inv3"
        }
    }
};

inventories = {
    "inv1": {

    },
    "inv2": {

    },
    "inv3": {

    }
}

// data.users["user2"]

app.get("/", function (req, res) {
    res.render("staem.hbs");
});

app.get("/user/:data", function (req, res) {
    let id = req.params.data;
    let user = data.users[id];
    res.render("user1.hbs", user);
});

app.get("/inventories/:ugh", function (req, res) {
    let i = req.params.ugh;
    let i1 = inventories[i];
    res.render("/inventories" + i1);
});


app.listen(7000, function () {
    console.log("Сервер запущен");
});