const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')


module.exports = app => {
  app.post('/api/stripe', requireLogin ,async (req, res) => {
   
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
        req.user.status = 'paid'
        req.user.plan = 'basic-monthly'
        await req.user.save()
    }
   
    res.send(req.user)
    
  });
};
