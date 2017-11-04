if (process.env.NODE_ENV === 'production') {
  //we are in production
  module.exports = require('./prod.js');
} else {
  //we are in develop - return key
  module.exports = require('./dev.js');
}
