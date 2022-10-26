// Required Modules 
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


// Setup for EJS, BodyParser, Static Pages
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Mongoose Database Setup
mongoose.pluralize(null);
const dbName = "multEEverseDB";
// const mongoUri = 'mongodb://localhost:27017/';

const dbIntigration = process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD;
const mongoUri = "mongodb+srv://" + dbIntigration + "@cluster0.h55fs.mongodb.net/";

mongoose.connect(mongoUri + dbName);

// Collection Structure 
const semesterSchema = new mongoose.Schema({
    name: String,
    code: String,
    link: String
});

const sem1 = new mongoose.model("semester1", semesterSchema);
const sem2 = new mongoose.model("semester2", semesterSchema);
const sem3 = new mongoose.model("semester3", semesterSchema);
const sem4 = new mongoose.model("semester4", semesterSchema);
const sem5 = new mongoose.model("semester5", semesterSchema);
const sem6 = new mongoose.model("semester6", semesterSchema);
const sem7 = new mongoose.model("semester7", semesterSchema);
const sem8 = new mongoose.model("semester8", semesterSchema);

app.get("/", (req, res) => {
    res.render("home");
});

semArray = [1, 2, 3, 4, 5, 6, 7, 8];

app.get("/semesterlist", (req, res) => {
    res.render("semesterList", { sem: semArray });
});

app.get("/semester1", (req, res) => {
    sem1.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 1 });
    })
});

app.get("/semester2", (req, res) => {
    sem2.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 2 });
    })
});

app.get("/semester3", (req, res) => {
    sem3.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 3 });
    })
});

app.get("/semester4", (req, res) => {
    sem4.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 4 });
    })
});

app.get("/semester5", (req, res) => {
    sem5.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 5 });
    })
});

app.get("/semester6", (req, res) => {
    sem6.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 6 });
    })
});

app.get("/semester7", (req, res) => {
    sem7.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 7 });
    })
});

app.get("/semester8", (req, res) => {
    sem8.find({}, (err, found) => {
        if (err)
            res.render("faliure")
        else
            res.render("semester", { subjects: found, semNum: 8 });
    })
});


app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});

// const https = require("https");
// setInterval(function () {
//     https.get("https://multeeverse-admin.herokuapp.com/");
// }, 300000); // every 5 minutes (300000)