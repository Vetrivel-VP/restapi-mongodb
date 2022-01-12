const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");
app.use(bodyParser.json());

// // Middle ware
// app.use("/posts", () => {
//   console.log("This is the middleware");
// });

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Now we have the ability to create the routes
// Routes
app.get("/", (req, res) => {
  res.send("Im inside the home");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected");
});

// Need to listen to the server
app.listen(3000);
