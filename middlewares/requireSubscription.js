const moment = require('moment');

module.exports = (req, res, next) => {
  console.log(moment(req.user.endSubOnDay).format() > moment().format());
  console.log(req.user.status == 'canceled' && moment(req.user.endSubOnDay).format() > moment().format());
  console.log(moment(req.user.endSubOnDay).format());

  // if (req.user.status !== 'paid' || (req.user.status == 'canceled' && moment(req.user.endSubOnDay).format() < moment().format() )) {
  if (req.user.status !== 'paid' && (req.user.status == 'canceled' && moment(req.user.endSubOnDay).format() < moment().format() ) ) {
    return res.status(403).send({ error: 'Requires subscription' });
  }
  next();
};


// module.exports = (req, res, next) => {
//   // console.log(moment(req.user.endSubOnDay).format() > moment().format());
//   console.log(req.user.status == 'canceled' && moment(req.user.endSubOnDay).format() > moment().format());
//   console.log(req.user.status === 'paid' || (req.user.status === 'canceled' && moment(req.user.endSubOnDay).format() > moment().format()))
//   // console.log(moment(req.user.endSubOnDay).format());

//   // if (req.user.status !== 'paid' || (req.user.status == 'canceled' && moment(req.user.endSubOnDay).format() < moment().format() )) {
//   if (req.user.status === 'paid' || (req.user.status === 'canceled' && moment(req.user.endSubOnDay).format() > moment().format())) {
//     next();
//   } else {
//     console.log('fuck')
//     return res.status(403).send({ error: 'Requires subscription' });
//   }
//   next();
// };
