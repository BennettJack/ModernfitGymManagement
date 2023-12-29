const express = require('express');
const app = express()
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");


app.use(express.json());
app.use(cors());


const db = new sqlite3.Database('./Databases/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("test" + err.message);
    }
    console.log('Connected to the database.');
});



app.get("/api", (req, res) => {
    res.json({ "users": ["userOne"] })
})

app.post('/user', (req, res) => {
    const body = req.body;
    console.log(body.FirstName, body.LastName, body.Username, body.Password, body.Pin, body.Email, body.Location)
    sql = 'INSERT INTO User(FirstName,LastName,Username,Password,Pin,Email,Location) VALUES (?,?,?,?,?,?,?)';
    db.run(
        sql,
        [body.FirstName, body.LastName, body.Username, body.Password, body.Pin, body.Email, body.Location],
        (err) => {
            if (err) return console.error("test" + err.message);
            res.send(300)
        },
        res.send(200)
    )
    
})

app.listen(5000, () => { console.log("server started on port 5000") })