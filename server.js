var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/todoListModel'), //created model loading here
  connectDb = require('./connection.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

connectDb().then(()=> {
    console.log("Mongodb connected")
});

console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });