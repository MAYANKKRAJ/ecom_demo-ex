import * as express from "express";
import * as mongodb from "mongodb";
import dburl from "../../config/db_url";

let fetch = express.Router().get("/",(req,res)=>{
    mongodb.MongoClient.connect(dburl,(err,client)=>{
        if (err) throw err;
        else{
            client.db().collection("Phones").find().toArray((err,array)=>{
                if (err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
export default fetch;