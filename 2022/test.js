const sqlite = require("sqlite3");

let db = new sqlite.Database("132.db", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("ono rabotaet!");
    }
});

db.serialize(function () {
    let query = "SELECT * FROM user";
    db.each(query, function (err, row) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(row);
        }
    })
})

db.close();