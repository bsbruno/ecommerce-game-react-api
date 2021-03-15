const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const routes = require("./routers/routes");
const connetion = require("./database/connection");

app.use(urlencoded({ extended: false }), json());
app.use("/", routes);

//conexão com db
connetion
  .authenticate()
  .then(() => {})
  .catch((err) => console.log(err));

app.listen(5058, () => {
  console.log("servido rodando ");
});
