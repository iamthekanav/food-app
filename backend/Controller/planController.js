// const plans=require("../Model/plansModel");
// const {v4 : uuidv4} = require("uuid");
// const fs=require("fs");
// const path = require("path");
// const pathName=path.join(__dirname, "..","Model", "plansModel.json");
// function createAPlan(req,res){
//     let plan=req.body;
//     let id=uuidv4();
//     plan.id=id;
//     plans.push(plan);
    
//     fs.writeFileSync(pathName,JSON.stringify(plans));
//     res.status(201).json({
//         message : "Plan Added"
//     })
// }
// function getAllPlans(req,res){
//     if(plans.length){
//         res.json({
//             message: "Successfully got all plans",
//             data : plans
//         })
//     }
//     else{
//         res.json({
//             message: "No Plans"
//         })
//     }
// }
// function getPlanById(req,res){
//     let {uid}=req.params;
//     let filteredPlan=plans.filter((plan)=>{
//         return plan.id==uid;
//     })
//     if(filteredPlan.length>0){
//         res.json(({
//             message : "Successful",
//             data : filteredPlan[0]
//         }))
//     }else{
//         res.json(({
//             message : "Plan not found"
//         }))
//     }
// }
// function updateAPlan(req,res){
//     let {uid}=req.params;
//     let updatedVals=req.body;
//     let filteredPlan=plans.filter((plan)=>{
//         return plan.id==uid;
//     });
//     if(filteredPlan.length>0){
//         let plan=filteredPlan[0];
//         for(key in updatedVals){
//             plan[key]=updatedVals[key];
//         }
        
//         fs.writeFileSync(pathName, JSON.stringify(plans));
//         res.json({
//             message :"Plan Updated"
//         })
//     }else{
//         res.json({
//             message :"Plan updation failed"
//         })
//     }
// }
// function deletePlan(req,res){
//     let {uid}=req.params;
//     let filteredPlan=plans.filter((plan)=>{
//         return plan.id!=uid;
//     })
//     if(filteredPlan.length==plans.length){
//         res.json({
//             message: "No Such Plan Found"
//         })
//     }else{
        
//         fs.writeFileSync(pathName, JSON.stringify(filteredPlan));
//         res.json({
//             message: "Plan Deleted"
//         })
//     }
// }
// module.exports.createAPlan=createAPlan;
// module.exports.getAllPlans=getAllPlans;
// module.exports.getPlanById=getPlanById;
// module.exports.updateAPlan=updateAPlan;
// module.exports.deletePlan=deletePlan;
///////////////////////////////////////////////M O N G O  DB ////////////////////////////

const planModel=require("../Model/plansModel");

async function createAPlan(req,res){
    try{
        let plan=req.body;
        let createdPlan= await planModel.create(plan);
        res.json({
            message : "plan is created",
            data : createdPlan
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function getAllPlans(req,res){
     try{
         let allPlans=await planModel.find({});
         if(allPlans.length>0){
            res.json({
                message: "Successfully got all plans",
                data : allPlans
            })
         }
         else{
            res.json({
                message: "No Plans"
            })
        }
     }
     catch(error){
         res.json({
             message : "Task Failed",
             error: error
         })
     }    
}
async function getPlanById(req,res){
    try{
        let {uid}=req.params;
        let allPlans=await planModel.find({_id: uid});
        if(allPlans.length>0){
            res.json({
                message: "Successfully got the plan",
                data : allPlans
            })
        }
        else{
            res.json({
                message: "No Plans"
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
async function updateAPlan(req,res){
    try{
        let {uid}=req.params;
        let updatedVals=req.body;
        let updatePlan=await planModel.findByIdAndUpdate(
            uid, updatedVals, {new : true}
        );
        res.json({
            message : "Plan Updated",
            data : updatePlan
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
async function deletePlan(req,res){
    try{
        let {uid}=req.params;
        let deletePLan = await planModel.findByIdAndDelete(uid);
        res.json({
            message : "Plan deleted",
            data : deletePLan
        })
    }
    catch(error){
        res.json({
            message : "Task Failed",
            error : error
        })
    }
}
module.exports.createAPlan=createAPlan;
module.exports.getAllPlans=getAllPlans;
module.exports.getPlanById=getPlanById;
module.exports.updateAPlan=updateAPlan;
module.exports.deletePlan=deletePlan;

