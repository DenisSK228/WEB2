const express = require("express");
const app = express();

// let names = {
//     "Sofie": "Litvin",
//     "Слава": "Украине",
//     "asd": "fgh"
// }

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

// app.get("/test", function (req, res) {
//     let data = req.query;
//     console.log(data);
//     if (data.name in names) {
//         res.send(names[data.name])
//     } else {
//         res.send("Don't press 'OK'!");
//     }

// });



app.listen(3000, function () {
    console.log("Success!");
});