const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');
const moment = require('moment');

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
      req.user.subscriptionId = sub.id;
      req.user.endSubOnDay = null;
      await req.user.save();
    }

    res.send(req.user);
  });

  app.post('/api/stripe/del', requireLogin, async (req, res) => {
    await stripe.subscriptions.del(req.user.subscriptionId, { at_period_end: true }, function(err, confirmation) {
      console.log('confirmation', confirmation);
      console.log('err', err);
    });

    //this is not going to work. what if i cancel but still have 20 days left? now i can watch any videos
    const customerDate = await stripe.subscriptions.retrieve(req.user.subscriptionId);

    req.user.status = 'canceled';
    req.user.plan = 'none';
    req.user.endSubOnDay = moment.unix(customerDate.current_period_end);
    await req.user.save();

    res.send(req.user);
  });
};
