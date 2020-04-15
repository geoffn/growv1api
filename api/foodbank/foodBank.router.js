const { getFoodBankAll, createFoodBank, getFoodBankById, deleteFoodBank, updateFoodBank } = require("./foodBank.controller");

const foodBankRouter = require("express").Router();

foodBankRouter.get("/", getFoodBankAll);

foodBankRouter.get("/:id", getFoodBankById);

foodBankRouter.post("/", createFoodBank);

foodBankRouter.delete("/:id", deleteFoodBank);

foodBankRouter.put("/", updateFoodBank);

console.log("in router");

module.exports = foodBankRouter;
