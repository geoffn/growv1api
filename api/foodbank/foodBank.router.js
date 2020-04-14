const { getFoodBankAll, createFoodBank } = require("./foodBank.controller");

const foodBankRouter = require("express").Router();

foodBankRouter.get("/", getFoodBankAll);
foodBankRouter.post("/", createFoodBank);

console.log("in router");

module.exports = foodBankRouter;
