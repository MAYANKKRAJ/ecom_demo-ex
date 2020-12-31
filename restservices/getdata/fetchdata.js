"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var db_url_1 = require("../../config/db_url");
var fetch = express.Router().get("/", function (req, res) {
    mongodb.MongoClient.connect(db_url_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            client.db().collection("Phones").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports["default"] = fetch;
