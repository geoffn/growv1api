const { getFoodBankAll, createFoodBank, getFoodBankById } = require("./foodBank.controller");

const foodBankRouter = require("express").Router();

foodBankRouter.get("/", getFoodBankAll);

foodBankRouter.get("/:id", getFoodBankById);

foodBankRouter.post("/", createFoodBank);

console.log("in router");

module.exports = foodBankRouter;
