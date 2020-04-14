require("dotenv").config();

const express = require("express");

const app = express();

//Import our user router and call
const foodBankRouter = require("./api/foodBank/foodBank.router");


app.use(express.json());

app.use('/api/foodbank', foodBankRouter);


app.listen(process.env.GROWV1APP_PORT, () => {
    console.log("server running on " + process.env.GROWV1APP_PORT)
});
