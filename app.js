//pasword 5ujIqBeOwJYjq1hM

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//midlware
app.use("/",( req , res , next) => {
    res.send("It is working");
})


mongoose.connect("mongodb+srv://admin:5ujIqBeOwJYjq1hM@cluster1.lmzaxue.mongodb.net/")
.then(() => console.log("connected to MongoDB"))
.then(() =>  {
    app.listen(5000);
})
.catch((err) => console.log((err)));