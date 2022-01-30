const express = require("express");
const hbs = require("hbs");
const app = express();
const sqlite = require("sqlite3");

app.use(express.static(__dirname + "/"));
app.set("view engine", "hbs");
app.set("views", "./templates");

async function getdata(typeq, dataq) {
    let promise = new Promise((res, rej) => {
        let db = new sqlite.Database("data.db", function (err) {
            if (true) {
                res("zoebis");
            } else if (false) {
                rej("ahh shit")
            }
        });
        db.close();
    });

    let result = await promise;
    return result
};




app.get("/", function (req, res) {
    getdata("all", []).then((data) => {
        let fin = {
            "columns": Object.keys(data[0]),
            "rows": data
        }
    })
    res.send("index.hbs", data)
})

app.get("/search", function () {
    let data = Object.values(req.query);
    getdata("search", data).then((data) => {
        let fin = {
            "columns": Object.keys(data[0]),
            "rows": data
        }
    })
})




app.listen(1337, () => {
    console.log('NAaaaiiiieec');
})