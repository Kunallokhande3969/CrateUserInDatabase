const express = require("express");
const app = express();

require("./config/db");
const UserModel = require("./models/user.model");
const userModel = require("./models/user.model");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
  const users = await UserModel.find();
  res.render("read", { Users: users });
});
app.get("/delete/:id", async function (req, res) {
  const users = await UserModel.findOneAndDelete({
    _id: req.params.id,
  });
  res.redirect("/");
});
app.get("/edit/:id", async function (req, res) {
  const user = await UserModel.findOne({
    _id: req.params.id,
  });
  res.render("edit", { user });
});
app.post("/update/:id", async function (req, res) {
  let { name, email, image } = req.body;
  const user = await UserModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      name,
      email,
      image,
    },
    { new: true }
  );
  res.redirect("/");
});

app.get("/create", function (req, res) {
  res.render("create");
  
});
app.post("/newUser", async function (req, res) {
  let { name, email, image } = req.body;
  const CreateUser = await UserModel.create({
    name,
    email,
    image,
  });
  res.redirect("/");
});
app.listen(3000);
