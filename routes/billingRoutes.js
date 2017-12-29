const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');

module.exports = app => {
  app.post('/api/stripe/sub', requireLogin, async (req, res) => {
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

    // console.log('sub ', sub);

    if (sub.id) {
      req.user.status = 'paid';
      req.user.plan = 'basic-monthly';
      req.user.subscriptionId = sub.id
      await req.user.save();
    }

    res.send(req.user);
  });

  app.post('/api/stripe/del', requireLogin, async (req, res) => {
    console.log('here', req.user.subscriptionId);

    await stripe.subscriptions.del(req.user.subscriptionId, function(err, confirmation) {
      console.log('here2', confirmation);
      console.log('err', err);
    });
    //change users status and plan
    

    req.user.status = 'canceled';
    req.user.plan = 'none';
    await req.user.save();

    res.send(del);
  });
};
