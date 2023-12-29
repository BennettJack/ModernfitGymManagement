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



app.get("/getUser", (req, res) => {
    const body = req.body;
    sql = 'SELECT * FROM User WHERE ID = 1';
    db.all(sql, [], (err, rows)=>{
        if (err) return console.error("test" + err.message);
        rows.forEach(row => {
            console.log(row.LastName);
        })
    })
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

app.post('/validateLogin', (req, res) => {
    const { username, password } = req.body
    console.log(username + " " + password)
    sql = "SELECT * FROM User WHERE Username = '" + username + "' and Password = '" + password + "'"
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err)
        }
        if (rows.length > 0) {
            console.log(rows);
            res.send({userData: rows, validation: true })
        }
    })

})

app.listen(5000, () => { console.log("server started on port 5000") })