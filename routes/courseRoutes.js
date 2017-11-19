const requireLogin = require('../middlewares/requiresLogin');

module.exports = app => {
  app.post('/api/course', requireLogin, (req, res) => {});
};
