const mongoose=require("mongoose");
const dbUrl=require("../Secrets/secrets");

mongoose.connect(
    dbUrl,{ useUnifiedTopology: true },{ useNewUrlParser: true }
).then((db)=>{
    console.log("Db Connected");
}).catch((error)=>{
    console.log(error);
});

let planSchema=new mongoose.Schema({
    name : {
        type: String,
        maxlength: [40, "max length exceeded"],
        required: true
    },
    duration : {
        type : Number,
        required:true
    },
    price : {
        type: Number,
        required: true
    },
    ratings : Number,
    discount : {
        type : Number,
        validate : {
            validator: function(){
                return this.discount<this.price;
            },
            message : "Discount can be greater than the actual price."
        }
    }
});

const planModel = mongoose.model("planConnection", planSchema);

module.exports=planModel;