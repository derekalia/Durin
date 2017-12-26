const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ authToken: profile.id });
      if (user) {
        done(null, user);
      } else {
        //create stipe customer
        const customer = await stripe.customers.create({
          description: profile.displayName
        });
        // console.log('stripe passport ', customer);

        //create user in db
        const newUser = await new User({
          authToken: profile.id,
          name: profile.displayName,
          stripeId: customer.id
        }).save();
        done(null, newUser);
      }
    }
  )
);

// passport.use(
//   new GitHubStrategy({
//   clientID: GITHUB_CLIENT_ID,
//   clientSecret: GITHUB_CLIENT_SECRET,
//   callbackURL: "http://127.0.0.1:3000/auth/github/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   User.findOrCreate({ githubId: profile.id }, function (err, user) {
//     return done(err, user);
//   });
// }
// ));
