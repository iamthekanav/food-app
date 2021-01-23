const express=require("express");
const app=express();
const planRouter = require("./Router/planRouter");
const usersRouter = require("./Router/usersRouter");

app.use(express.json());

app.use("/api/plans",planRouter);
app.use("/api/users", usersRouter);

app.listen(3000,function(){
    console.log("App started");
})
