const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const views = path.join(__dirname, "views/");
//http routes
const httpraiz = "/";
const httphome = "/home";
const httpregister = "/register";
const httplogin = "/login";
//html
const homehtml = "home.html";
const registerhtml = "register.html";
const loginhtml = "login.html";

app.use(express.static(__dirname + "/public"));

app.get(httpraiz, (req, res) => res.send("Mercado Libre"));

app.get(httphome, (req, res) => {
  res.sendFile(path.join(views, homehtml));
});

app.get(httpregister, (req, res) => {
  res.sendFile(path.join(views, registerhtml));
});

app.get(httplogin, (req, res) => {
  res.sendFile(path.join(views, loginhtml));
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
  console.log(__dirname);
});
