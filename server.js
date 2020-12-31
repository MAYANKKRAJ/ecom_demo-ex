"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
var fetchdata_1 = require("../E_COM/restservices/getdata/fetchdata");
app.use("/fetch", fetchdata_1["default"]);
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("server started " + port);
});
