const express = require("express");
var cors = require('cors')
const setParser = require("./utils");
const routes = require("./routes/routes.js");
const app = express();
app.use(cors()) // Use this after the variable declaration


setParser(app);
routes(app);

const server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});