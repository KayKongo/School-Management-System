const express = require('express')
const mongoose = require('mongoose')

const app = express()
const studentsRouter = require('./routes/studentsRoutes')

app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = 3000

app.listen(port, () => console.log(`Connected Successfully School Management System ${port}`));

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})

app.use(studentsRouter);

app.use((req, res, next) => {
    res.status(400).send("We think you are lost")
})
