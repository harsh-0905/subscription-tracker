import Subscription from "../models/subscription.model.js";
import { Client} from "@upstash/workflow";
 const workflowClient = new Client({
     token:process.env.QSTASH_TOKEN
 });

export const createSubscription =  async (req, res, next) => {
    try{

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });
        const result = await workflowClient.trigger({
            url:`${process.env.SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body:{
                subscriptionId:subscription._id
            },
            retries: 0,
        });
        res.status(201).json({
           subscription,
           workflowRunId:result.workflowRunId,
        });

    }catch(error){
        next(error);
    }

};
export const getUserSubscription = async (req,res,next)=> {
    try{
        //check the user is same as the one in the token
        if(req.user.id!=req.params.id){
            const error = new Error('You are not the owner of this account');
            error.status = 401;
            throw error;
        }
        const subscription = await Subscription.find({user:req.params.id});
        res.status(200).json({ success: true,date:subscription});

    }catch(e){
        next(e);
    }
}
