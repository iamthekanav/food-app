// const users=require("../Model/usersModel");
// const {v4 : uuidv4} = require("uuid");
// const fs=require("fs");
// const path=require("path");
// const pathName=path.join(__dirname, "..","Model", "usersModel.json");
const userModel=require("../Model/usersModel");

async function getAllUsers(req,res){
    try{
        let allUsers=await userModel.find({});
        if(allUsers.length>0){
            res.json({
                message : "Got all users",
                data : allUsers
            })
        }
        else{
            res.json({
                message : "No Users"
            })
        }
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function createUser(req,res){
    try{
        let user=req.body;
        let create=await userModel.create(user);
        res.status(201).json({
            message : "User Created",
            data : create
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function getUserById(req,res){
    try{
        let {uid}= req.params;
        let filteredUser=await userModel.findById(uid);
        res.status(201).json({
                message : "Got the user",
                data:filteredUser
            })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function updateUser(req,res){
    try{
        let {uid}=req.params;
        let updatedVals=req.body;
        let updateUser=await userModel.findByIdAndUpdate(uid, updatedVals, {new : true});
        res.json({
            message : "User updated",
            data : updateUser
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function deleteUser(req,res){
    try{
        let {uid}=req.params;
        let deleteUser=await userModel.findByIdAndDelete(uid);
        res.json({
            message : "User Deleted",
            data : deleteUser
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
module.exports.getAllUsers=getAllUsers;
module.exports.createUser=createUser;
module.exports.getUserById=getUserById;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;