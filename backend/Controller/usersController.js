const users=require("../Model/usersModel.json");
const {v4 : uuidv4} = require("uuid");
const fs=require("fs");
const path=require("path");
const pathName=path.join(__dirname, "..","Model", "usersModel.json");
function getAllUsers(req,res){
    let allUsers=users;
    if(allUsers.length>0){
        res.json({
            message : "Got all users",
            data : allUsers
        })
    }
    else{
        res.json({
            message : "Get all users failed."
        })
    }
}
function createUser(req,res){
    let user=req.body;
    let id=uuidv4();
    user.id=id;
    users.push(user);
    fs.writeFileSync(pathName,JSON.stringify(users));
    res.status(201).json({
        message : "User Created"
    })
}
function getUserById(req,res){
    let {uid}= req.params;
    let filteredUser=users.filter((user)=>{
        return user.id==uid;
    })
    if(filteredUser.length>0){
        let user=filteredUser[0];
        res.json({
            message : "got the user",
            data:user
        })
    }else{
        res.json({
            message : "cant fetch this user"
        })
    }
}
function updateUser(req,res){
    let {uid}=req.params;
    let updatedVals=req.body;
    let filteredUser=users.filter((user)=>{
        return user.id==uid;
    })
    if(filteredUser.length>0){
        let user=filteredUser[0];
        for(key in updatedVals){
            user[key]=updatedVals[key];
        }
        fs.writeFileSync(pathName,JSON.stringify(users));
        res.json({
            message : "User updated"
        })
    }
    else{
        res.json({
            message : "unable to update this user"
        })
    }
}
function deleteUser(req,res){
    let {uid}=req.params;
    let filteredUsers=users.filter((user)=>{
        return user.id!=uid;
    })
    if(filteredUsers.length==users.length){
        res.json({
            message: "no such user"
        })
    }else{
        fs.writeFileSync(pathName,JSON.stringify(filteredUsers));
        res.json({
            message :"user deleted"
        })
    }
}
module.exports.getAllUsers=getAllUsers;
module.exports.createUser=createUser;
module.exports.getUserById=getUserById;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;