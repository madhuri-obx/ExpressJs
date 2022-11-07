const express = require('express');
const bodyParser = require("body-parser")
const controller =require('./controllers')

const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.get('/user', controller.getUsers)
app.post('/users', controller.addUser)
app.get('/user/lastName/:lname', controller.getUser)
app.get('/user/firstName/:fname', controller.getUserWithFirstName)
app.delete('/deleteUser/:fname',controller.deleteUser)

app.listen(3000);