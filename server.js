console.clear();
//import express
const express = require("express"); // ou import express from express en installant bubble au niveau node
const connectDB = require("./config/ConnectDB");
const userRouter = require("./router/user");
const commandeRouter = require("./router/commande");
//instance app

const app = express();
require("dotenv").config(); // kif n3aytelha au debut rahi global tet3ada 3la les fichiers lkol kima json li houwa
// middlaware global yet3ada 3la les routes lkol : to hide secret keys or informations
connectDB();
// passing body data : we want to pass an incomming data as a json file
app.use(express.json());
//route
//user
app.use("/api/user", userRouter); // middleware
//commande
app.use("/api/commande", commandeRouter);
//PORT
const port = process.env.port || 8000;

//create server
app.listen(port, (err) => {
  err ? console.error(err) : console.log(`server is running on port : ${port}`);
});
