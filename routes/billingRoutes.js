const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requiresLogin')


module.exports = app => {
  app.post('/api/stripe', requireLogin ,async (req, res) => {
    
    // console.log(req.body)
    // console.log('req.user', req.user);

    await stripe.customers.update(req.user.stripeId, {
      source: req.body.id
    });

    const sub = await stripe.subscriptions.create({
      customer: req.user.stripeId,
      items: [
        {
          plan: 'basic-monthly'
        }
      ]
    });

    console.log('sub ', sub);

    if(sub.id){
        req.user.plan = 'paid'
        await req.user.save()
    }
   
    res.send(user)
    
  });
};
