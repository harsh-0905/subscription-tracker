import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscription } from '../controller/subscription.controller.js';
const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'Get all Subscriptions' });   
});
subscriptionRouter.get('/:_id', (req, res) => {
    res.send({ title: 'Get subscription details' });   
});
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.put('/:_id', (req, res) => {
    res.send({ title: 'Update subscription' });   
});

subscriptionRouter.delete('/:_id', (req, res) => {
    res.send({ title: 'Delete subscription' });   
});
subscriptionRouter.get('/user/:id', authorize,getUserSubscription);   

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'Cancel subscription' });   
});
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'Get upcoming renewals' });   
});

export default subscriptionRouter;