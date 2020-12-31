import * as express from "express";
import * as mongodb from "mongodb";
import * as bodyparser from "body-parser";
import * as cors from "cors";

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
import fetch from "../E_COM/restservices/getdata/fetchdata";
app.use("/fetch",fetch);
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log (`server started ${port}`);
})