const express = require('express');
const app = express()
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");

//Makes the app use Express and CORS to access the database securely
app.use(express.json());
app.use(cors());


//Instantiates the database
const db = new sqlite3.Database('./Databases/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("test" + err.message);
    }
    console.log('Connected to the database.');
});


//Gets a user with an ID as the parameter. Returns a user object
app.get("/getUser", (req, res) => {
    const id = req.query.user_id;
    sql = "SELECT * FROM User WHERE ID = '" + id + "'"
    db.all(sql, [], (err, rows) => {
        if (err) return console.error("test" + err.message);
        if (rows.length > 0) {
            //console.log(rows);
            res.send({ userData: rows, validation: true })
        }
    })
})

//Gets a user's food diary entries with a user ID as a parameter. Returns all food diary objects that correspond to that user ID
app.get("/getFoodDiaryEntries", (req, res) => {
    const id = req.query.user_id
    const date = req.query.date
    console.log(id, date)

    sql = "SELECT * FROM FoodDiary WHERE UserID = '" + id + "'AND Date = '" + date + "'"
    db.all(sql, [], (err, rows) => {
        if (err) return console.error("test" + err.message);
        if (rows.length > 0) {
            console.log(rows);
            res.send({ diaryEntries: rows, validation: true })
        }
    })

})

//Creates a new user.
app.post('/user', (req, res) => {
    const body = req.body;
    console.log(body.FirstName, body.LastName, body.Username, body.Password, body.Pin, body.Email, body.Location, body.KcalGoal)
    sql = 'INSERT INTO User(FirstName,LastName,Username,Password,Pin,Email,Location, KcalGoal) VALUES (?,?,?,?,?,?,?,?)';
    db.run(
        sql,
        [body.FirstName, body.LastName, body.Username, body.Password, body.Pin, body.Email, body.Location, body.KcalGoal],
        (err) => {
            if (err) return console.error("test" + err.message);
            res.send(300)
        },
        res.send(200)
    )
    
})

//Validates the login using username and password parameters. Returns a user object.
app.post('/validateLogin', (req, res) => {
    const { username, password } = req.body
    sql = "SELECT * FROM User WHERE Username = '" + username + "' and Password = '" + password + "'"
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err)
        }
        if (rows.length > 0) {
            res.send({userData: rows, validation: true })
        }
    })

})

//Adds a new food diary entry into the database. Takes user ID and diary params as params
app.post('/foodDiary', (req, res) => {
    const body = req.body;
    //console.log(body.userID, body.foodItemID, body.quantity, body.fullDate)
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