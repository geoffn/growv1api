const { createUser, getUsersAll, getUserById, updateUser, deleteUser } = require("./user.controller");

const userRouter = require("express").Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsersAll);

userRouter.get("/:id", getUserById);

userRouter.put("/", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
