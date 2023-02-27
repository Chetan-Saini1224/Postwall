import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import expressLayouts from "express-ejs-layouts";
import router from "./routes/index.js";

//when ever we use type="module" 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config(); //npm package that automatically loads environment variables from a . env file into the process. env object.
const app = express();
//req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views","./views");

app.use(expressLayouts);
//extract styles and scripts from sub page into layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(cors()); //Enable All CORS Requests

app.use(express.static("/assets"));

app.use('/',router);

const PORT = process.env.PORT || 8000;
app.listen(PORT,(err) => {
    if(err)
    {
        console.log("Port listen error : ",err);
        return;
    }
    console.log(`server PORT : ${PORT}`)
})