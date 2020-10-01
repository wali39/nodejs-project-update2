const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const User = require("./models/User");
require("./db/mongoose");
const app = express();

app.set("view engine", "hbs");
app.set("views", "./public/templates/views");
// hbs.registerPartials(__dirname + "/views/header");
hbs.registerPartials("./public/templates/partials");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index");
});

// const { string } = require("yargs");

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/register", async (req, res) => {
  // console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.redirect("back");
  } catch (error) {
    res.redirect("back");
  }

  // res.render("success");
  //   res.render("signup");
  //
});
app.get("/signIn", (req, res) => {
  res.render("signin");
});
app.listen(5000, () => {
  console.log("server started at port 5000");
});
