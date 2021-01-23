const express=require("express");
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } =require("../Controller/usersController");

const usersRouter=express.Router();

usersRouter
.route("")
.get(getAllUsers)
.post(createUser);


usersRouter
.route("/:uid")
.get(getUserById)
.patch(updateUser)
.delete(deleteUser);



module.exports=usersRouter;