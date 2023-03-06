import mongoose from "mongoose";

mongoose.set("strictQuery",false);

mongoose.connect('mongodb://127.0.0.1:27017/postwall_development');

const db = mongoose.connection;

db.on("error",console.error.bind(console,"error connecting with db"));

db.once('open',function() {
    console.log("conncted to mongo db");
});

export default db;