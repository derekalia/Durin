const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body)
    
//     let stripeObj = await stripe.customers.create(
//         {
//           description: profile.displayName
//         },
//         function(err, customer) {
//           console.log(err);
//         }
//       );

  });
};
