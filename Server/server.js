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
    const id = req.query.user_id;
    sql = "SELECT * FROM User WHERE ID = '" + id + "'"
    db.all(sql, [], (err, rows) => {
        console.log("wtf2");
        if (err) return console.error("test" + err.message);
        if (rows.length > 0) {
            console.log(rows);
            res.send({ userData: rows, validation: true })
        }
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

app.post('/foodDiary', (req, res) => {
    const body = req.body;
    console.log(body.userID, body.foodItemID, body.quantity, body.fullDate)
    sql = 'INSERT INTO FoodDiary(UserID,FoodItemID,Quantity,Date) VALUES (?,?,?,?)';
    db.run(
        sql,
        [body.userID, body.foodItemID, body.quantity, body.fullDate],
        (err) => {
            if (err) return console.error("test" + err.message);
            res.send(300)
        },
        res.send(200)
    )

})

app.listen(5000, () => { console.log("server started on port 5000") })