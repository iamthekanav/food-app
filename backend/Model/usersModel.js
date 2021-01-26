const mongoose=require("mongoose");
const dbUrl=require("../Secrets/secrets");

mongoose.connect(
    dbUrl, { useNewUrlParser: true } ,{ useUnifiedTopology: true }
).then((db)=>{
    console.log("DB connected");
})
.catch((error)=>{
    console.log(error);
})

let userSchema=new mongoose.Schema({
    name : {
        type : String,
        required: true,
        maxlength: [40, "length exceeded 40"]
    },
    email : {
        type : String, 
        required: true,
        unique : true
    },
    password : {
        type : String,
        required: true,
        minlength : [6, "Password must be greater than 6 characters"]
    },
    confirmpassword : {
        type: String,
        required:true,
        validate : {
            validator : function(){
                return this.password == this.confirmpassword;
            },
            message : "PassWord didnt match."
        }
    },
    role : {
        type : String,
        enum : ["Admin", "User", "Restaurant Partner", "Delivery Partner"],
        default : "User"
    }
})

let userModel=mongoose.model("userCollection", userSchema);

module.exports=userModel;