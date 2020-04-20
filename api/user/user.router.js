const { createUser, getUsersAll, getUserById } = require("./user.controller");

const userRouter = require("express").Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsersAll);

userRouter.get("/:id", getUserById);

module.exports = userRouter;
