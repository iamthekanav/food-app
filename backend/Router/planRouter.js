const express=require("express");

const planRouter=express.Router();

const {getAllPlans, createAPlan, getPlanById, updateAPlan, deletePlan}= require("../Controller/planController");

planRouter
.route("")
.get(getAllPlans)
.post(createAPlan);

planRouter
.route("/:uid")
.get(getPlanById)
.patch(updateAPlan)
.delete(deletePlan);

module.exports=planRouter;