const { getFoodBankAll } = require("./foodBank.controller");

const foodBankRouter = require("express").Router();

foodBankRouter.get("/api/foodbank", getFoodBankAll);

module.exports = foodBankRouter;
