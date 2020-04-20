const { createUser, getUsersAll } = require("./user.controller");

const userRouter = require("express").Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsersAll);

module.exports = userRouter;
