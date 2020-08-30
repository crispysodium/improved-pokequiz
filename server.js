const express = require("express");
const session = require("express-session");
<<<<<<< HEAD
const mysql = require("mysql2");
const passport = require("./config/passport");
const path = require("path");

const PORT = process.env.PORT || 3001;
=======
const passport = require("./config/passport");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const db = require("./models");
>>>>>>> backend

const cors = require("cors");
const db = require("./models");

const app = express();

const app = express();

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static(__dirname + "/client/public"));

<<<<<<< HEAD
// Use express sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// Define passport authentication middleware
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
=======
// Define passport authentication middleware
// passport.use(db.User.createStrategy());
// passport.serializeUser(db.User.serializeUser());
// passport.deserializeUser(db.User.deserializeUser());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});
>>>>>>> backend

// Add cors so that frontend can talk to backend
app.use(cors());

<<<<<<< HEAD
// initialize sql connection
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        // check if we need to import csv values and not run if it already exists
        // Import csv data after sequelize tables have been initialized
=======
>>>>>>> backend

        db.Pokemon.findAll().then(result => {
        if (result.length === 0) {
            require("./db/import-pokemon.js");
        }
        });

<<<<<<< HEAD
        db.Questions.findAll().then(result => {
        if (result.length === 0) {
            require("./db/import-questions.js");
        }
        });

        console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
        );
    });
});

=======
>>>>>>> backend
// API and App routes
// app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
=======
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      // check if we need to import csv values and not run if it already exists
      // Import csv data after sequelize tables have been initialized
  
      db.Pokemon.findAll().then(result => {
        if (result.length === 0) {
          require("./db/import-pokemon.js");
        }
      });
  
      db.Questions.findAll().then(result => {
        if (result.length === 0) {
          require("./db/import-questions.js");
        }
      });
  
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
>>>>>>> backend
