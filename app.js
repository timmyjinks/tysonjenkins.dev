const express = require("express");
const path = require("path");
const routes = require("./routes/index.js");
const port = 8080;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.static("public/views"));
app.use("/", routes);

const server = app.listen(port, () => {
  console.log(`we listening on port ${server.address().port}`);
});
